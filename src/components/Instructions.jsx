import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Instructions({ steps }) {
  return (
    <div
      className="space-y-4 mb-10"
      role="region"
      aria-labelledby="instructions-title"
    >
      <Typography id="instructions-title" className="sr-only">
        Instructions
      </Typography>
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          role="listitem"
          aria-labelledby={`step-title-${index}`}
        >
          <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

          <div className="flex items-center px-2 py-3">
            <div
              className="flex justify-center text-teal-600"
              aria-hidden="true"
            >
              <step.icon className="h-10 w-10" />
            </div>

            <div className="mx-3">
              <Typography
                id={`step-title-${index}`}
                className="text-gray-900 dark:text-gray-900"
              >
                {step.text}
                {step.link && (
                  <a
                    href={step.link}
                    className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"
                    aria-label={`Link to ${step.linkText}`}
                  >
                    {step.linkText}
                  </a>
                )}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string,
      linkText: PropTypes.string,
    })
  ).isRequired,
};

export default Instructions;
