import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import { useState } from "react";
import {
  DevicePhoneMobileIcon,
  UserCircleIcon,
  ClipboardDocumentListIcon,
  StarIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/solid"; // Additional icons

const StepByStepGuides = () => {
  const heading = "Step by Step Guides";
  const [activeTab, updateActiveTab] = useState("expungement-form-guide");

  // Steps for the Expungement Form Guide
  const expungementSteps = [
    {
      icon: DevicePhoneMobileIcon,
      description: "Check Eligibility for Expungement.",
      link: "/expungement-eligibility",
    },
    {
      icon: UserCircleIcon,
      description: "Gather Necessary Documents.",
      link: "/documents-needed",
    },
    {
      icon: ClipboardDocumentListIcon,
      description: "Complete the Petition for Expungement (Form A).",
      link: "/petition-form-a",
    },
    {
      icon: StarIcon,
      description: "File the Petition with the Court.",
      link: "/file-petition",
    },
  ];

  const additionalExpungementSteps = [
    {
      icon: DevicePhoneMobileIcon,
      description: "Notify Law Enforcement and Other Agencies.",
      link: "/notify-agencies",
    },
    {
      icon: UserCircleIcon,
      description: "Attend the Court Hearing (If Required).",
      link: "/court-hearing",
    },
    {
      icon: ClipboardDocumentListIcon,
      description: "Expungement Order and Notifications.",
      link: "/expungement-order",
    },
    {
      icon: StarIcon,
      description: "Confirm Record Removal.",
      link: "/confirm-removal",
    },
  ];

  // Steps for the Civil Complaint Form Guide
  const civilComplaintSteps = [
    {
      icon: BuildingOfficeIcon,
      description: "Identify Parties Involved.",
      link: "/identify-parties",
    },
    {
      icon: ShieldCheckIcon,
      description: "Establish Jurisdiction.",
      link: "/jurisdiction",
    },
    {
      icon: ClipboardDocumentListIcon,
      description: "Draft the Civil Complaint.",
      link: "/draft-complaint",
    },
    {
      icon: StarIcon,
      description: "File the Complaint in Court.",
      link: "/file-complaint",
    },
  ];

  // Steps for the Family Court Petition Guide
  const familyCourtSteps = [
    {
      icon: HomeIcon,
      description: "Provide Petitioner and Respondent Information.",
      link: "/petitioner-respondent-info",
    },
    {
      icon: UserCircleIcon,
      description: "Specify Child Information (if applicable).",
      link: "/child-info",
    },
    {
      icon: ClipboardDocumentListIcon,
      description: "Outline the Grounds for Action.",
      link: "/grounds-for-action",
    },
    {
      icon: StarIcon,
      description: "Submit Requested Orders to the Court.",
      link: "/submit-orders",
    },
  ];

  const tabsData = [
    {
      label: "Expungement Form Guide",
      value: "expungement-form-guide",
      steps: expungementSteps,
      additionalSteps: additionalExpungementSteps,
    },
    {
      label: "Civil Complaint Form Guide",
      value: "civil-complaint-form-guide",
      steps: civilComplaintSteps,
      additionalSteps: [], // If you need additional steps for this section, add them here.
    },
    {
      label: "Family Court Petition Guide",
      value: "family-court-petition-guide",
      steps: familyCourtSteps,
      additionalSteps: [], // If you need additional steps for this section, add them here.
    },
  ];

  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Tabs className="mt-6 w-auto" value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
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
            <TabsBody></TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default StepByStepGuides;
