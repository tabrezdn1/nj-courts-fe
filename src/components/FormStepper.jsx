import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { CogIcon, UserIcon, HomeIcon } from "@heroicons/react/24/outline";
import FormRenderer from "./FormRenderer";

const GPTStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => {
    if (!isLastStep) setActiveStep((cur) => cur + 1);
  };
  const handlePrev = () => {
    if (!isFirstStep) setActiveStep((cur) => cur - 1);
  };

  React.useEffect(() => {
    setIsLastStep(activeStep === steps.length - 1);
    setIsFirstStep(activeStep === 0);
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
        <FormRenderer form={steps[activeStep]} />
      </div>
      <div className="flex justify-between mb-5">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </>
  );
};

export default GPTStepper;
