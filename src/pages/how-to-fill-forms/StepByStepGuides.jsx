import React, { useState } from "react";
import { Card, CardBody, Tabs, TabsHeader, TabsBody, Tab,Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CardWithLink from "../../components/CardWithLink"; 
import {
  DevicePhoneMobileIcon,
  UserCircleIcon,
  ClipboardDocumentListIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const StepByStepGuides = () => {
  const heading = "Step by Step Guides";
  const [activeTab, updateActiveTab] = useState("expungement-form-guide");

  const expungementSteps = [
    {
      icon: DevicePhoneMobileIcon,
      title: "Expungement Form Guide",
      description: "Follow these steps to expunge your criminal record and file a petition for expungement.",
      link: "/expungement-guide",
    },
    {
      icon: UserCircleIcon,
      title: "Eligibility Check",
      description: "Ensure that you meet the eligibility criteria for expungement.",
      link: "/eligibility-check",
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "Document Preparation",
      description: "Gather all necessary documents for the expungement process.",
      link: "/document-preparation",
    },
    {
      icon: StarIcon,
      title: "Submit the Petition",
      description: "Submit the expungement petition to the appropriate court.",
      link: "/submit-petition",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Court Appearance",
      description: "Learn about the court appearance process for expungement cases.",
      link: "/court-appearance",
    },
    {
      icon: UserCircleIcon,
      title: "Receive Expungement Order",
      description: "What to expect after receiving the expungement order from the court.",
      link: "/expungement-order",
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "Record Removal",
      description: "Understand the process of removing records from databases after expungement.",
      link: "/record-removal",
    },
    {
      icon: StarIcon,
      title: "Notify Relevant Parties",
      description: "Notify law enforcement agencies and other relevant parties about your expungement.",
      link: "/notify-parties",
    },
  ];

  const civilComplaintSteps = [
    {
      icon: UserCircleIcon,
      title: "Civil Complaint Form Guide",
      description: "Step-by-step guide on filing a civil complaint in the court.",
      link: "/civil-complaint-guide",
    },
  ];

  const familyCourtSteps = [
    {
      icon: ClipboardDocumentListIcon,
      title: "Family Court Petition Guide",
      description: "Steps to follow when submitting a family court petition.",
      link: "/family-court-guide",
    },
  ];

  const tabsData = [
    {
      label: "Expungement Form Guide",
      value: "expungement-form-guide",
      steps: expungementSteps,
    },
    {
      label: "Civil Complaint Form Guide",
      value: "civil-complaint-form-guide",
      steps: civilComplaintSteps,
    },
    {
      label: "Family Court Petition Guide",
      value: "family-court-petition-guide",
      steps: familyCourtSteps,
    },
  ];

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="font-normal px-[64px]">
        <Tabs className="mt-6 w-auto" value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {tabsData.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => updateActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
          <Typography variant="h4" className="text-center mb-4 text-black">
          Hello
      </Typography>
      <Typography variant="paragraph" className="text-center mb-8 text-black">
        You are welcome
      </Typography>

            {tabsData.map(
              ({ value, steps }) =>
                activeTab === value && (
                  <CardWithLink
                    key={value}
                    steps={steps} 
                  />
                )
            )}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default StepByStepGuides;
