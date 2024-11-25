import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import NavigateLink from "../../components/NavigateLink";
import PointsList from "../../components/PointsList";
import React from 'react';

import {
  BookOpenIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { understandingCF } from "../../data/configs";

const UnderstandingCF = () => {
  const { heading, introduction, sections } = understandingCF;

  // Map icon names to imported components
  const iconMapping = {
    DocumentTextIcon: DocumentTextIcon,
    ClipboardDocumentCheckIcon: ClipboardDocumentCheckIcon,
    BookOpenIcon: BookOpenIcon,
    QuestionMarkCircleIcon: QuestionMarkCircleIcon,
  };

  return (
    <Card className="w-full h-[calc(100vh-2rem)] sm:mt-4 mt-16">
      <Heading heading={heading} />
      <CardBody className="font-normal mb:px-[64px]">
        <Typography color="gray" className="py-1 mb:w-1/2 text-2xl">
          {introduction}
        </Typography>
        {sections.map((section, index) => (
          <div key={index} className="my-8">
            <Typography
              variant="h4"
              color="teal"
              className="font-semibold flex items-center gap-2"
            >
              {React.createElement(iconMapping[section.icon], { className: "w-8 h-8" })}
              {section.title}
            </Typography>
            <Typography color="blue-gray" className="mt-2 text-lg">
              {section.description}
            </Typography>
            <PointsList
              listPoints={section.listPoints.map((item) => ({
                ...item,
                description: (
                  <>
                    {item.description}{" "}
                    {item.links &&
                      item.links.map((link, idx) => (
                        <NavigateLink
                          key={idx}
                          link={link.route}
                          label={link.label}
                        />
                      ))}
                  </>
                ),
              }))}
            />
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default UnderstandingCF;
