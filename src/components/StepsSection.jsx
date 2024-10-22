import React from 'react';
import { Typography, Button } from "@material-tailwind/react"; // Importing Button

const StepsSection = ({ stepsHeading, steps, buttonLabel }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Steps heading */}
      <Typography variant="h3" className="text-center mb-4">
        {stepsHeading}
      </Typography>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center h-full"> {/* Add h-full to ensure all steps take full height */}
            {/* Icon */}
            <div className="mb-4 text-teal-600">
              <step.icon className="h-12 w-12" />
            </div>

            {/* Step Title */}
            <Typography variant="h6" className="font-semibold mb-2">
              {`STEP ${index + 1}`}
            </Typography>

            {/* Step Description (Dynamic Content) */}
            <Typography 
              variant="body2" 
              className="text-gray-600 mb-4 font-bold text-lg"
            >
              {step.description}
            </Typography>

            {/* Flex-grow div to ensure buttons are aligned */}
            <div className="flex-grow"></div>

            {/* Learn More Button */}
            <Button
              variant="outlined"
              color="teal"
              size="lg"
              className="mt-8 "
              style={{ height: '50px' }} // Ensure uniform button height
              onClick={() => window.location.href = step.link} // Navigate to different pages
            >
              {buttonLabel}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
