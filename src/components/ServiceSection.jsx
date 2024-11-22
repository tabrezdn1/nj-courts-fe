import { Typography, Button } from "@material-tailwind/react";

const ServiceSection = ({ heading, services, buttonText }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 px-4 py-10">
      <Typography variant="h3" className="text-center mb-8">
        {heading}
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center p-4">
            <div className="mb-4 flex justify-center">
              <service.icon className="h-16 w-16 text-teal-500" />
            </div>

            <Typography variant="h5" className="font-semibold mb-2">
              {service.title}
            </Typography>

            <Typography variant="paragraph" className="text-gray-600 mb-">
              {service.description}
            </Typography>
          </div>
        ))}
      </div>

      <Button variant="outlined" color="teal" size="lg" className="mt-8">
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceSection;
