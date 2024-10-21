import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import * as HeroIcons from "@heroicons/react/24/outline";
import FormRenderer from "./FormRenderer";

const GPTStepper = ({ 
  steps, 
  moveNextTab,
  movePrevTab,
  isFirstTab,
  isLastTab, 
}) => {
  const [activeStep, setActiveStep] = React.useState(0);
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
  }, [activeStep, steps.length]);

  return (
    <>
      <div className="w-full px-24 py-4 min-h-24">
        {steps.length > 1 && (
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            {steps.map((step, index) => {
              const IconComponent = HeroIcons[step.icon];
              return (
                <Step key={index} onClick={() => setActiveStep(index)}>
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6" />
                  ) : (
                    <div className="h-6 w-6" /> // Fallback empty div if icon not found
                  )}
                </Step>
              );
            })}
          </Stepper>
        )}
      </div>
      <div className="flex items-center justify-center min-h-96 pb-16">
        <FormRenderer form={steps[activeStep]} />
      </div>
      <div className="flex justify-between mb-5 sticky bottom-0 bg-white p-4 max-w-[inherit]">
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
        </div>
      </div>
    </>
  );
};

export default GPTStepper;
