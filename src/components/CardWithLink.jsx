import { Card, CardBody, Typography } from "@material-tailwind/react";
import NavigateLink from "./NavigateLink";

const CardWithLink = ({ title, description, steps }) => {
  return (
    <div className="w-full py-10" role="region" aria-labelledby="card-title">
      <Typography
        id="card-title"
        variant="h4"
        className="text-center mb-4 text-black"
      >
        {title}
      </Typography>
      <Typography variant="paragraph" className="text-center mb-8 text-black">
        {description}
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 h-full"
            role="article"
            aria-labelledby={`step-title-${index}`}
            aria-describedby={`step-description-${index}`}
          >
            <CardBody className="flex flex-col items-center justify-center p-6 h-full">
              <div
                className="flex justify-center mb-4 text-teal-600"
                aria-hidden="true"
              >
                <step.icon className="h-12 w-12" />
              </div>
              <Typography
                id={`step-title-${index}`}
                variant="h5"
                className="font-semibold mb-2 text-gray-800"
              >
                {step.title}
              </Typography>
              <Typography
                id={`step-description-${index}`}
                className="text-gray-600 text-center mb-4"
              >
                {step.description}
              </Typography>
              <NavigateLink link={step.link} label="Learn More" />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardWithLink;
