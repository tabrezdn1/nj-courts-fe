import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import {
  BriefcaseIcon,
  HomeIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { whatIsExpungement } from "../../data/configs";

const WhatIsExpungement = () => {
  const {
    heading,
    whatIsExpungementTitle,
    whatIsExpungementText,
    howExpungementWorksTitle,
    howExpungementWorksText,
    benefitsTitle,
    benefits,
    exceptionsTitle,
    exceptionsText,
    exceptions,
  } = whatIsExpungement;

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="px-8 py-12">
        <Typography variant="h3" color="blue-gray" className="mb-6 font-bold">
          {whatIsExpungementTitle}
        </Typography>
        <Typography color="gray" className="mb-8 text-lg leading-relaxed">
          {whatIsExpungementText}
        </Typography>

        <Typography
          variant="h3"
          color="blue-gray"
          className="mt-10 mb-6 font-bold"
        >
          {howExpungementWorksTitle}
        </Typography>
        <Typography color="gray" className="mb-8 text-lg leading-relaxed">
          {howExpungementWorksText}
        </Typography>

        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <div className="md:w-1/2">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-6 font-bold"
            >
              {benefitsTitle}
            </Typography>
            <ul className="space-y-6">
              {benefits.map(({ icon, title, description }, index) => {
                const IconComponent = {
                  BriefcaseIcon,
                  HomeIcon,
                  AcademicCapIcon,
                }[icon];
                return (
                  <li key={index} className="flex items-start gap-4">
                    <IconComponent className="w-8 h-8 text-teal-500" />
                    <div>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {title}
                      </Typography>
                      <Typography color="gray" className="text-lg">
                        {description}
                      </Typography>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:w-1/2">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-6 font-bold"
            >
              {exceptionsTitle}
            </Typography>
            <Typography color="gray" className="text-lg leading-relaxed mb-4">
              {exceptionsText}
            </Typography>
            <ul className="space-y-4">
              {exceptions.map(({ title, description }, index) => (
                <li key={index} className="flex items-start gap-4">
                  <ShieldCheckIcon className="w-8 h-8 text-teal-500" />
                  <div>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {title}
                    </Typography>
                    <Typography color="gray" className="text-lg">
                      {description}
                    </Typography>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default WhatIsExpungement;
