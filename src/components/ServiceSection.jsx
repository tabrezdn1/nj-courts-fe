import { Typography, Button } from "@material-tailwind/react";

const ServiceSection = ({ heading, services, buttonText }) => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-10 px-4 py-10"
      role="region"
      aria-labelledby="service-section-heading"
    >
      <Typography
        id="service-section-heading"
        variant="h3"
        className="text-center mb-8"
      >
        {heading}
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
        {services.map((service, index) => (
          <div key={index} className="text-center p-4" role="listitem">
            <div className="mb-4 flex justify-center" aria-hidden="true">
              <service.icon className="h-16 w-16 text-teal-500" />
            </div>

            <Typography
              variant="h5"
              className="font-semibold mb-2"
              aria-labelledby={`service-title-${index}`}
            >
              {service.title}
            </Typography>

            <Typography
              id={`service-description-${index}`}
              variant="paragraph"
              className="text-gray-900 mb-"
            >
              {service.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
