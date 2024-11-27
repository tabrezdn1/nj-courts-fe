import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import * as HeroIcons from "@heroicons/react/24/outline";
import FormRenderer from "./FormRenderer";
import { useParams } from "react-router-dom";

import ExpungementFormSubmit from "../pages/expungement-forms/ExpungementFormSubmit";

const FormStepper = ({
  id,
  steps,
  tabDetails,
  formConfig,
  updateTabDetails,
  moveNextTab,
  movePrevTab,
  isFirstTab,
  isLastTab,
  isTabComplete,
  updateFormDetails,
  tabIndex,
}) => {
  const { mode } = useParams();

  const getSeletedOptions = () => {
    return (
      JSON.parse(localStorage.getItem(id)) || {
        activeStep: 0,
        tabCompleted: false,
        progress: 0
      }
    );
  };

  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [selectedOptions, setSelectedOptions] =
    React.useState(getSeletedOptions);

  const setInputProperty = (fieldId, property, value) => {
    setSelectedOptions((prevOptions) => {
      return {
        ...prevOptions,
        [fieldId]: {
          ...prevOptions[fieldId],
          [property]: value,
        },
      };
    });
  };

  const isValidField = (field, updateDisplay = true) => {
    if (field?.validation) {
      if (field.validation.required) {
        const fieldValue = selectedOptions[field.id]?.value;
        if (field.type !== "checkbox") {
          if (!fieldValue || fieldValue.trim() === "") {
            if (updateDisplay) {
              setInputProperty(field.id, "error", true);
              setInputProperty(field.id, "error_desc", "Required Field");
            }
            return false;
          }
        } else {
          const requiredOptions = field.validation.requiredOptions || [];
          if (
            !fieldValue ||
            requiredOptions.some((option) => !fieldValue[option])
          ) {
            if (updateDisplay) {
              setInputProperty(field.id, "error", true);
              setInputProperty(field.id, "error_desc", "Required Field");
            }
            return false;
          }
        }
      }
    }
    if (field?.type === "phone") {
      const fieldValue = selectedOptions[field.id]?.value;
      const minLength = 10;
      const maxLength = 15;
      const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
      if (!phonePattern.test(fieldValue) || fieldValue.length < minLength || fieldValue.length > maxLength) {
        if (updateDisplay) {
          setInputProperty(field.id, "error", true);
          setInputProperty(field.id, "error_desc", "Invalid Phone Number");
        }
        return false;
      }
    }

    if (field?.type === "ssn") {
      const fieldValue = selectedOptions[field.id]?.value;
      const ssnPattern = /^\d{9}$/;
      const maxLength = 9;
      if (!ssnPattern.test(fieldValue) || fieldValue.length != maxLength) {
        if (updateDisplay) {
          setInputProperty(field.id, "error", true);
          setInputProperty(field.id, "error_desc", "Invalid SSN Format");
        }
        return false;
      }
    }
    return true;
  };

  const handleSubfields = (field, updateDisplay = false) => {
    let valid = true;
    valid = isValidField(field, updateDisplay) && valid;
    for (let subField of field?.subFields?.[selectedOptions[field.id]?.value] ||
      []) {
      valid = handleSubfields(subField) && valid;
    }
    return valid;
  };

  const isValid = (updateDisplay = true, index = undefined) => {
    const currentStep = steps[index || selectedOptions.activeStep];
    let valid = true;

    for (let field of currentStep?.fields) {
      valid = handleSubfields(field, updateDisplay) && valid;
    }

    return valid;
  };

  const isValidForm = () => {
    let valid = true;
    steps.forEach((item, currentIndex) => {
      valid = isValid(false, currentIndex) && valid;
    });
    return valid;
  };

  const handleNext = () => {
    if (isValid()) {
      if (!isLastStep) {
        setSelectedOptions((prev) => {
          return {
            ...prev,
            activeStep: prev.activeStep + 1,
            progress: Math.max(prev.activeStep + 1, prev.progress)
          };
        });
      } else if (isLastStep && !isLastTab) {
        setSelectedOptions((prev) => {
          return { ...prev, tabCompleted: true };
        });
        moveNextTab();
        isTabComplete(true);
      }
    }
  };
  const handlePrev = () => {
    if (!isFirstStep) {
      setSelectedOptions((prev) => {
        return { ...prev, activeStep: prev.activeStep - 1 };
      });
    } else if (isFirstStep && !isFirstTab) {
      movePrevTab();
    }
  };

  React.useEffect(() => {
    setIsLastStep(selectedOptions.activeStep === steps.length - 1);
    setIsFirstStep(selectedOptions.activeStep === 0);

    localStorage.setItem(id, JSON.stringify(selectedOptions));
    if (isLastStep && isValid(false) && !selectedOptions.tabCompleted) {
      isTabComplete()
      setSelectedOptions(
        (prev) => {
          return {
            ...prev,
            tabCompleted: true
          }
        }
      )
    }
  }, [selectedOptions, steps.length]);

  const handleConditionStepper = (fieldId, option, isChecked = true) => {
    const isConditionalStepper = tabDetails.conditionalStepper;
    const conditionalField = tabDetails.conditionalField;
    if (!isConditionalStepper || conditionalField != fieldId) {
      return;
    }
    const tab_id = tabDetails.value;
    const tab = formConfig.find((item) => item.value === tab_id);
    const updatedStepper = tab.stepper.concat(
      tabDetails.conditional_stepper[option]
    );
    const updatedTab = { ...tab, stepper: updatedStepper };
    setSelectedOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      const prevConditionalSteps =
        tabDetails.conditional_stepper[prevOptions[fieldId]?.value] || [];
      prevConditionalSteps.forEach((step) => {
        step.fields.forEach((field) => {
          delete updatedOptions[field.id];
        });
      });
      return updatedOptions;
    });
    updateTabDetails(tab_id, updatedTab);
  };

  const handleOptionChange = (fieldId, option, isChecked = true) => {
    handleConditionStepper(fieldId, option, isChecked);
    updateFormDetails(selectedOptions, fieldId, option, isChecked);
  };

  const initializeConditionalStepper = () => {
    const isConditionalStepper = tabDetails.conditionalStepper;
    const conditionalField = tabDetails.conditionalField;
    if (!isConditionalStepper || !(conditionalField in selectedOptions)) {
      return;
    }
    const option = selectedOptions[conditionalField].value;
    const tab_id = tabDetails.value;
    const tab = formConfig.find((item) => item.value === tab_id);
    const updatedStepper = tab.stepper.concat(
      tabDetails.conditional_stepper[option]
    );
    const updatedTab = { ...tab, stepper: updatedStepper };
    updateTabDetails(tab_id, updatedTab);
  };

  React.useEffect(() => {
    if (isValid(false)) {
      isTabComplete();
    }

    initializeConditionalStepper();

    return () => {
      console.log("Component unmounted");
      localStorage.removeItem(id);
    };
  }, []);

  const getStepIndex = (title, subtitle) => {
    return steps.findIndex(
      (step) => step.title === title && step.subtitle === subtitle
    );
  };

  const handleStepperClick = (index) => {
    if (isValid() && (selectedOptions.progress + 1) >= (index)) {
      setSelectedOptions(prev => {
        return { ...prev, activeStep: index }
      })
    }
  }

  const init = () => {
    if (isValidForm()) {
      isTabComplete(true)
    } else {
      isTabComplete(false)
    }
  }
  init()

  return (
    <>
      <div className="w-full md:px-24 py-4 min-h-24">
        {steps.length > 1 && (
          <Stepper
            activeStep={selectedOptions.activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            {steps.map((step, index) => {
              const IconComponent = HeroIcons[step.icon];
              return (
                <Step key={index} onClick={() => handleStepperClick(index)}>
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6" />
                  ) : (
                    <div className="h-6 w-6" />
                  )}
                </Step>
              );
            })}
          </Stepper>
        )}
      </div>
      <div className="flex items-center justify-center min-h-96">
        <FormRenderer
          form={steps[selectedOptions.activeStep] || steps[0]}
          tabIndex={tabIndex}
          stepIndex={getStepIndex(
            steps[selectedOptions.activeStep].title,
            steps[selectedOptions.activeStep].subtitle
          )}
          id={id}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          handleOptionChangeCallback={handleOptionChange}
        />
      </div>
      <div className="flex justify-between sticky bottom-0 bg-white max-w-[inherit] pt-4 md:pt-0">
        <div>
          {!(isFirstTab && isFirstStep) && (
            <Button onClick={handlePrev} disabled={isFirstTab && isFirstStep}>
              Prev
            </Button>
          )}
        </div>
        <div>
          {!(isLastTab && isLastStep) && (
            <Button onClick={handleNext} disabled={isLastTab && isLastStep}>
              Next
            </Button>
          )}
          {steps[selectedOptions.activeStep]?.showSubmitButton === true &&
            isLastStep && <ExpungementFormSubmit formData={selectedOptions} />}
        </div>
      </div>
    </>
  );
};

export default FormStepper;
