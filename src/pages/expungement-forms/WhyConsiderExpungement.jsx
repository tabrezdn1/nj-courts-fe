import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import {
  BriefcaseIcon,
  HomeIcon,
  AcademicCapIcon,
  HeartIcon,
  UserIcon,
  KeyIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { whyConsiderExpungement as data } from "../../data/configs";

const WhyConsiderExpungement = () => {
  const { heading, sections } = data;

  const icons = {
    BriefcaseIcon,
    HomeIcon,
    AcademicCapIcon,
    HeartIcon,
    UserIcon,
    KeyIcon,
  };

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="why-consider-expungement-heading"
    >
      <Heading heading={heading} id="why-consider-expungement-heading" />
      <CardBody className="px-8 py-12 space-y-12">
        {sections.map((section, index) => {
          const IconComponent = icons[section.icon];
          return (
            <div
              key={index}
              className="space-y-4 mb-10"
              role="article"
              aria-labelledby={`section-${index}-heading`}
            >
              <div
                className="flex items-center gap-4 p-4 bg-teal-300 rounded-lg shadow-md"
                role="header"
                aria-label={section.title}
              >
                <IconComponent
                  className="w-10 h-10 text-white"
                  aria-hidden="true"
                />
                <Typography
                  variant="h4"
                  color="white"
                  className="font-bold"
                  id={`section-${index}-heading`}
                >
                  {section.title}
                </Typography>
              </div>

              <Typography
                color="blue-gray"
                className="text-lg mt-2"
                aria-label={section.description}
              >
                {section.description}
              </Typography>

              <ul className="space-y-3 pl-4" role="list">
                {section.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                    role="listitem"
                  >
                    <CheckCircleIcon
                      className="w-5 h-5 text-teal-500"
                      aria-hidden="true"
                    />
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {point.title}
                      </Typography>
                      <Typography color="black" className="text-base">
                        {point.content}
                      </Typography>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default WhyConsiderExpungement;
