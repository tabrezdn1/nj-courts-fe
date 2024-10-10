import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { useState } from "react";

const StepByStepGuides = () => {
  const heading = "Step by Step Guides";
  const [activeTab, updateActiveTab] = useState("expungement-form-guide");
  const tabsData = [
    {
      label: "Expungement Form Guide",
      value: "expungement-form-guide",
      desc: "",
      list: [
        {
          title: "Section 1: Personal Information",
          description:
            "Provide your full legal name, date of birth, and contact information.",
        },
        {
          title: "Section 2: Criminal History",
          description:
            "List all arrests, charges, and convictions with dates and case numbers.",
        },
        {
          title: "Section 3: Statement of Eligibility",
          description:
            "Explain how you meet the eligibility criteria for expungement.",
        },
        {
          title: "Section 4: Certification",
          description:
            "Sign and date the petition, certifying that all information is accurate.",
        },
        {
          title: "Review and Submit:",
          description: "Carefully review your petition before filing.",
        },
      ],
    },
    {
      label: "Civil Complaint Form Guide",
      value: "civil-complaint-form-guide",
      desc: "",
      list: [
        {
          title: "Identify Parties",
          description:
            "Clearly state the names and addresses of all plaintiffs and defendants.",
        },
        {
          title: "Jurisdiction and Venue",
          description: "Specify why the court has authority over the case.",
        },
        {
          title: "Statement of Facts",
          description:
            "Provide a detailed account of the events leading to the lawsuit.",
        },
        {
          title: "Relief Sought",
          description:
            "Outline the specific remedies or compensation you are requesting.",
        },
      ],
    },
    {
      label: "Family Court Petition Guide",
      value: "family-court-petition-guide",
      desc: "",
      list: [
        {
          title: "Petitioner and Respondent Information",
          description: "Include details for both parties.",
        },
        {
          title: "Child Information",
          description:
            "List names, ages, and current living arrangements of involved children.",
        },
        {
          title: "Grounds for Action",
          description:
            "Explain the legal basis for your request (e.g., custody modification).",
        },
        {
          title: "Requested Orders",
          description:
            "Specify what you are asking the court to decide or change.",
        },
      ],
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
            <TabsBody>
              {tabsData.map(({ value, desc, list }) => (
                <TabPanel key={value} value={value}>
                  <Typography color="gray" className="py-1 w-1/2 text-2xl">
                    {desc}
                  </Typography>
                  <PointsList listPoints={list} />
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default StepByStepGuides;
