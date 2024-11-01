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
  isLastTab
}) => {
  const { mode } = useParams();

  const getSeletedOptions = () => {
    if (mode === "new") {
      return {activeStep: 0, tabCompleted: false};
    } else {
      return JSON.parse(localStorage.getItem(id)) || {activeStep: 0, tabCompleted: false};
    }
  }

  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState(getSeletedOptions);

  const setInputProperty = (fieldId, property, value) => {
    setSelectedOptions((prevOptions) => {
      return {
        ...prevOptions,
        [fieldId]: {
          ...prevOptions[fieldId],
          [property]: value,
        },
      };
    })
  }

  const isValidField = (field) => {
    if (field?.validation) {
      if (field.validation.required) {
        const fieldValue = selectedOptions[field.id]?.value;
        if (field.type !== "checkbox") {
          // Validation for non-checkbox fields
          if (!fieldValue || fieldValue.trim() === "") {  
            setInputProperty(field.id, "error", true);
            setInputProperty(field.id, "error_desc", "Required Field");
            return false
          }
        } else {
          // Validation for checkbox fields
          const requiredOptions = field.validation.requiredOptions || [];
          if (!fieldValue || requiredOptions.some(option => !fieldValue[option])) {
            setInputProperty(field.id, "error", true);
            setInputProperty(field.id, "error_desc", "Required Field");
            return  false
          }
        }
      }
    }
    return true
  }

  const handleSubfields = (field) => {
    let valid = true;
    valid = isValidField(field) && valid;
    for (let subField of (field?.subFields?.[selectedOptions[field.id]?.value] || [])) {
      valid = handleSubfields(subField) && valid
    };
    return valid
  }

  const isValid = () => {
    const currentStep = steps[selectedOptions.activeStep];
    let valid = true
  
    for (let field of currentStep?.fields) {
      valid = handleSubfields(field) && valid
    }
  
    return valid;
  };

  const handleNext = () => {
    if (isValid()){
      if (!isLastStep) {
        setSelectedOptions(
          (prev) => {
            return {...prev, activeStep: prev.activeStep+1}
          }
        )
      } else if (isLastStep && !isLastTab) {
        setSelectedOptions(
          (prev) => {
            return {...prev, tabCompleted: true}
          }
        )
        moveNextTab();
      }
    }
  };
  const handlePrev = () => {
    if (!isFirstStep) {
      setSelectedOptions(
        (prev) => {
          return {...prev, activeStep: prev.activeStep-1}
        }
      )
    } else if (isFirstStep && !isFirstTab) {
      movePrevTab();
    }
  };
  
  React.useEffect(() => {
    setIsLastStep(selectedOptions.activeStep === steps.length - 1);
    setIsFirstStep(selectedOptions.activeStep === 0);

    localStorage.setItem(id, JSON.stringify(selectedOptions));
  }, [selectedOptions, steps.length]);

  const handleOptionChange = ( fieldId, option, isChecked=true ) => {
    const isConditionalStepper = tabDetails.conditionalStepper;
    const conditionalField = tabDetails.conditionalField;
    if (!isConditionalStepper || conditionalField != fieldId) {
      return
    }
    const tab_id = tabDetails.value
    const tab = formConfig.find(item => item.value === tab_id);
    const updatedStepper = tab.stepper.concat(tabDetails.conditional_stepper[option]);
    const updatedTab = { ...tab, stepper: updatedStepper };
    setSelectedOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      const prevConditionalSteps = tabDetails.conditional_stepper[prevOptions[fieldId]?.value] || [];
      prevConditionalSteps.forEach((step) => {
        step.fields.forEach((field) => {
          delete updatedOptions[field.id];
        });
      });
      return updatedOptions;
    });
    updateTabDetails(tab_id, updatedTab);
  }

  React.useEffect(() => {
    const isConditionalStepper = tabDetails.conditionalStepper;
    const conditionalField = tabDetails.conditionalField;
    if (!isConditionalStepper || !(conditionalField in selectedOptions)) {
      return
    }
    const option = selectedOptions[conditionalField].value
    const tab_id = tabDetails.value
    const tab = formConfig.find(item => item.value === tab_id);
    const updatedStepper = tab.stepper.concat(tabDetails.conditional_stepper[option]);
    const updatedTab = { ...tab, stepper: updatedStepper };
    updateTabDetails(tab_id, updatedTab);
  }, [])

  return (
    <>
      <div className="w-full px-24 py-4 min-h-24">
        {steps.length > 1 && (
          <Stepper
            activeStep={selectedOptions.activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            {steps.map((step, index) => {
              const IconComponent = HeroIcons[step.icon];
              return (
                <Step key={index}>
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
          id={id}
          selectedOptions={selectedOptions} 
          setSelectedOptions={setSelectedOptions}
          handleOptionChangeCallback={handleOptionChange}
        />
      </div>
      <div className="flex justify-between sticky bottom-0 bg-white max-w-[inherit]">
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
          {steps[selectedOptions.activeStep]?.showSubmitButton === true && isLastStep && (
            <ExpungementFormSubmit formData={selectedOptions}/>
          )}
        </div>
      </div>
    </>
  );
};

export default FormStepper;
