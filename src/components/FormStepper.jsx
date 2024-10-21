import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { CogIcon, UserIcon, HomeIcon } from "@heroicons/react/24/outline";
import FormRenderer from "./FormRenderer";

const GPTStepper = ({ 
  tab_id, 
  isTabActive, 
  steps, 
  formData, 
  updateField, 
  updateActiveStepLocalStorage,
  moveNextTab,
  movePrevTab,
  isFirstTab,
  isLastTab, 
}) => {
  const [activeStep, setActiveStep] = React.useState(isTabActive ? formData['activeStep'] || 0 : 0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((cur) => cur + 1);
    } else if (isLastStep && !isLastTab) {
      moveNextTab();
    }
  };
  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
    } else if (isFirstStep && !isFirstTab) {
      movePrevTab();
    }
  };

  React.useEffect(() => {
    setIsLastStep(activeStep === steps.length - 1);
    setIsFirstStep(activeStep === 0);
    if (isTabActive) {
      updateActiveStepLocalStorage(activeStep)
    }
  }, [activeStep, steps.length]);

  return (
    <>
      <div className="w-full px-24 py-4 min-h-32">
        {steps.length > 1 && (
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            {steps.map((step, index) => (
              <Step key={index} onClick={() => setActiveStep(index)}>
                {step.icon == "UserIcon" &&<UserIcon className="h-6 w-6" />}
                {step.icon == "HomeIcon" && <HomeIcon className="h-6 w-6" />}
                {step.icon == "CogIcon" && <CogIcon className="h-6 w-6" />}
              </Step>
            ))}
          </Stepper>
        )}
      </div>
      <div className="flex items-center justify-center min-h-full">
        <FormRenderer tab_id={tab_id} form={steps[activeStep]} formData={formData} updateField={updateField} />
      </div>
      <div className="flex justify-between mb-5">
        <Button onClick={handlePrev} disabled={isFirstTab && isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastTab && isLastStep}>
          Next
        </Button>
      </div>
    </>
  );
};

export default GPTStepper;
