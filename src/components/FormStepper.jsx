import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import * as HeroIcons from "@heroicons/react/24/outline";
import FormRenderer from "./FormRenderer";

import ExpungementFormSubmit from "../pages/expungement-forms/ExpungementFormSubmit";

const FormStepper = ({
  id,
  steps,
  moveNextTab,
  movePrevTab,
  isFirstTab,
  isLastTab,
}) => {
  const getSeletedOptions = () => {
    return JSON.parse(localStorage.getItem(id)) || {activeStep: 0, tabCompleted: false};
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

  const isValid = () => {
    const currentStep = steps[selectedOptions.activeStep];
    let valid = true
  
    for (let field of currentStep.fields) {
      if (field?.validation) {
        if (field.validation.required) {
          const fieldValue = selectedOptions[field.id]?.value;
  
          if (field.type !== "checkbox") {
            // Validation for non-checkbox fields
            if (!fieldValue || fieldValue.trim() === "") {
              setInputProperty(field.id, "error", true);
              setInputProperty(field.id, "error_desc", "Required Field");
              valid = false
            }
          } else {
            // Validation for checkbox fields
            const requiredOptions = field.validation.requiredOptions || [];
            if (!fieldValue || requiredOptions.some(option => !fieldValue[option])) {
              setInputProperty(field.id, "error", true);
              setInputProperty(field.id, "error_desc", "Required Field");
              valid = false
            }
          }
        }
      }
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
          form={steps[selectedOptions.activeStep]} 
          id={id}
          selectedOptions={selectedOptions} 
          setSelectedOptions={setSelectedOptions}
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
          {steps[selectedOptions.activeStep].showSubmitButton === true && isLastStep && (
            <ExpungementFormSubmit formData={selectedOptions}/>
          )}
        </div>
      </div>
    </>
  );
};

export default FormStepper;
