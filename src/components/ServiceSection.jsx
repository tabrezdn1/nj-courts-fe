import React from 'react';
import { Typography, Button } from "@material-tailwind/react";

// The service section component that accepts dynamic content via props
const ServiceSection = ({ heading, services, buttonText }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Dynamic Heading */}
      <Typography variant="h3" className="text-center mb-8">
        {heading}
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center p-4">
            {/* Service Icon */}
            <div className="mb-4 flex justify-center">
              <service.icon className="h-16 w-16 text-teal-500" />
            </div>

            {/* Service Title */}
            <Typography variant="h5" className="font-semibold mb-2">
              {service.title}
            </Typography>

            {/* Service Description */}
            <Typography variant="body1" className="text-gray-600 mb-">
              {service.description}
            </Typography>
          </div>
        ))}
      </div>

      {/* Dynamic Call-to-action button */}
      <Button variant="outlined" color="teal" size="lg" className="mt-8">
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceSection;
