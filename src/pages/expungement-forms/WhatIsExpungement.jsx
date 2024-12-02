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
    <Card className="w-full overflow-y-auto mt-16 md:mt-0" shadow={false}>
      <Heading heading={heading} />
      <CardBody className="px-8 py-12">
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-6 font-bold"
          role="heading"
          aria-level={1}
        >
          {whatIsExpungementTitle}
        </Typography>
        <Typography
          color="black"
          className="mb-8 text-lg leading-relaxed"
          aria-label="What is expungement explanation"
        >
          {whatIsExpungementText}
        </Typography>

        <Typography
          variant="h3"
          color="blue-gray"
          className="mt-10 mb-6 font-bold"
          role="heading"
          aria-level={1}
        >
          {howExpungementWorksTitle}
        </Typography>
        <Typography
          color="black"
          className="mb-8 text-lg leading-relaxed"
          aria-label="How expungement works explanation"
        >
          {howExpungementWorksText}
        </Typography>

        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <div className="md:w-1/2">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-6 font-bold"
              role="heading"
              aria-level={1}
            >
              {benefitsTitle}
            </Typography>
            <ul className="space-y-6" role="list">
              {benefits.map(({ icon, title, description }, index) => {
                const IconComponent = {
                  BriefcaseIcon,
                  HomeIcon,
                  AcademicCapIcon,
                }[icon];
                return (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                    role="listitem"
                  >
                    <IconComponent
                      className="w-8 h-8 text-teal-500"
                      aria-hidden="true"
                    />
                    <div>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-semibold"
                        role="heading"
                        aria-level={2}
                      >
                        {title}
                      </Typography>
                      <Typography color="black" className="text-lg">
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
              role="heading"
              aria-level={1}
            >
              {exceptionsTitle}
            </Typography>
            <Typography
              color="black"
              className="text-lg leading-relaxed mb-4"
              aria-label="Exceptions explanation"
            >
              {exceptionsText}
            </Typography>
            <ul className="space-y-4" role="list">
              {exceptions.map(({ title, description }, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                  role="listitem"
                >
                  <ShieldCheckIcon
                    className="w-8 h-8 text-teal-500"
                    aria-hidden="true"
                  />
                  <div>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-semibold"
                      role="heading"
                      aria-level={2}
                    >
                      {title}
                    </Typography>
                    <Typography color="black" className="text-lg">
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
