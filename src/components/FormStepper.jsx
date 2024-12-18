import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import * as HeroIcons from "@heroicons/react/24/outline";
import FormRenderer from "./FormRenderer";
import ExpungementFormSubmit from "../pages/expungement-forms/ExpungementFormSubmit";

const FormStepper = ({
  id,
  steps,
  showErrorPage = false,
  activeTab,
  disableShowErrorPage,
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
  const getSeletedOptions = () => {
    return (
      JSON.parse(localStorage.getItem(id)) || {
        activeStep: 0,
        tabCompleted: false,
        progress: 0,
      }
    );
  };

  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [selectedOptions, setSelectedOptions] =
    React.useState(getSeletedOptions);

  const setInputProperty = (fieldId, property, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [fieldId]: {
        ...prevOptions[fieldId],
        [property]: value,
      },
    }));
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
    if (field?.type === "zipcode") {
      const fieldValue = selectedOptions[field.id]?.value;
      const minLength = 5;
      if (fieldValue.length < minLength) {
        if (updateDisplay) {
          setInputProperty(field.id, "error", true);
          setInputProperty(field.id, "error_desc", "Invalid Zipcode");
        }
        return false;
      }
    }
    if (field?.type === "phone") {
      const fieldValue = selectedOptions[field.id]?.value;
      const minLength = 10;
      const maxLength = 15;
      const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
      if (
        !phonePattern.test(fieldValue) ||
        fieldValue.length < minLength ||
        fieldValue.length > maxLength
      ) {
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
      if (!ssnPattern.test(fieldValue) || fieldValue.length !== maxLength) {
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
      valid = handleSubfields(subField, updateDisplay) && valid;
    }
    return valid;
  };

  const isValid = (updateDisplay = true, index = undefined) => {
    const currentStep =
      steps[index !== undefined ? index : selectedOptions.activeStep];
    let valid = true;

    for (let field of currentStep?.fields) {
      valid = handleSubfields(field, updateDisplay) && valid;
    }

    return valid;
  };

  const isValidForm = (updateDisplay = false) => {
    let valid = true;
    steps.forEach((item, currentIndex) => {
      valid = isValid(updateDisplay, currentIndex) && valid;
    });
    return valid;
  };

  const handleNext = (index = undefined) => {
    if (isValid(true, index)) {
      if (!isLastStep) {
        setSelectedOptions((prev) => ({
          ...prev,
          activeStep: prev.activeStep + 1,
          progress: Math.max(prev.activeStep + 1, prev.progress),
        }));
        return true;
      } else if (isLastStep && !isLastTab) {
        setSelectedOptions((prev) => ({
          ...prev,
          tabCompleted: true,
        }));
        moveNextTab();
        isTabComplete(true);
        return true;
      }
    }
    return false;
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setSelectedOptions((prev) => ({
        ...prev,
        activeStep: prev.activeStep - 1,
      }));
    } else if (isFirstStep && !isFirstTab) {
      movePrevTab();
    }
  };

  React.useEffect(() => {
    setIsLastStep(selectedOptions.activeStep === steps.length - 1);
    setIsFirstStep(selectedOptions.activeStep === 0);

    localStorage.setItem(id, JSON.stringify(selectedOptions));
  }, [selectedOptions, steps.length]);

  const handleConditionStepper = (fieldId, option, isChecked = true) => {
    const isConditionalStepper = tabDetails.conditionalStepper;
    const conditionalField = tabDetails.conditionalField;
    if (!isConditionalStepper || conditionalField !== fieldId) {
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

  const getStepIndex = (title, subtitle) => {
    return steps.findIndex(
      (step) => step.title === title && step.subtitle === subtitle
    );
  };

  const handleStepperClick = (index) => {
    let currentStep = selectedOptions.activeStep;
    while (currentStep < index && handleNext(currentStep)) {
      currentStep += 1;
    }
    setSelectedOptions((prev) => ({
      ...prev,
      activeStep: Math.min(currentStep, index),
    }));
  };

  if (isValidForm()) {
    isTabComplete(true);
  } else {
    isTabComplete(false);
  }

  React.useEffect(() => {
    if (showErrorPage) {
      let errorStep;
      for (let i = 0; i < steps.length; i++) {
        if (!isValid(false, i)) {
          errorStep = i;
          disableShowErrorPage();
          break;
        }
      }
      isValid(true, errorStep);
      setSelectedOptions((prev) => ({
        ...prev,
        activeStep: errorStep,
      }));
    }
  }, [showErrorPage]);

  return (
    <>
      <div className="w-full md:px-24 py-4 min-h-24">
        {steps.length > 1 && (
          <Stepper
            activeStep={selectedOptions.activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
            aria-label="Form Stepper"
          >
            {steps.map((step, index) => {
              const IconComponent = HeroIcons[step.icon];
              return (
                <Step
                  key={index}
                  onClick={() => handleStepperClick(index)}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <div className="h-6 w-6" aria-hidden="true" />
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
          activeTab={activeTab}
        />
      </div>
      <div className="flex justify-between sticky bottom-0 bg-white max-w-[inherit] pt-4 md:pt-0">
        <div>
          {!(isFirstTab && isFirstStep) && (
            <Button
              onClick={handlePrev}
              disabled={isFirstTab && isFirstStep}
              aria-label="Previous Step"
            >
              Prev
            </Button>
          )}
        </div>
        <div>
          {!(isLastTab && isLastStep) && (
            <Button
              onClick={() => handleNext()}
              disabled={isLastTab && isLastStep}
              aria-label="Next Step"
            >
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
