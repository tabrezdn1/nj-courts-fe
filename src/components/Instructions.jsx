import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Instructions({ steps }) {
  return (
    <div className="space-y-4  mb-10">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 "
        >
          
          <div className="w-2 bg-gray-800 dark:bg-gray-900 "></div>

          
          <div className="flex items-center px-2 py-3 ">
            
            <div className="flex justify-center text-teal-600">
              <step.icon className="h-10 w-10" />
            </div>

           
            <div className="mx-3 ">
              <Typography className="text-gray-600 dark:text-gray-200">
                {step.text}
                {step.link && (
                  <a
                    href={step.link}
                    className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"
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