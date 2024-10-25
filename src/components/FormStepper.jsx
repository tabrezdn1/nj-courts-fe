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
  let formDetail = {}

  const getInitialStep = () => {
    formDetail = JSON.parse(localStorage.getItem(id));
    if (formDetail?.activeStep === undefined) {
      formDetail = {activeStep: 0}
      localStorage.setItem(id, JSON.stringify(formDetail))
    }
    return formDetail.activeStep
  };

  const [activeStep, setActiveStep] = React.useState(getInitialStep);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  React.useEffect(() => {
    formDetail = JSON.parse(localStorage.getItem(id));
    formDetail.activeStep = activeStep
    localStorage.setItem(id, JSON.stringify(formDetail));
  }, [activeStep]);

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
      <div className="flex items-center justify-center min-h-96">
        <FormRenderer form={steps[activeStep]} prefilledValues={formDetail} id={id}/>
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
          {steps[activeStep].showSubmitButton === true && isLastStep && (
            <ExpungementFormSubmit />
          )}
        </div>
      </div>
    </>
  );
};

export default FormStepper;
