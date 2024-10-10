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

const HowToGetYourRecords = () => {
  const heading = "How to get your Records?";
  const [activeTab, updateActiveTab] = useState("obtain-criminal-record");
  const tabsData = [
    {
      label: "Obtaining Criminal Records",
      value: "obtain-criminal-record",
      desc: "To apply for expungement, you'll need detailed information about your criminal history:",
      list: [
        {
          title: "Local Law Enforcement",
          description:
            "Contact the police department where you were arrested for arrest records and charges.",
        },
        {
          title: "County Court Records",
          description:
            "Reach out to the Superior Court in the county of your conviction for court documents, including docket numbers and case dispositions.",
        },
        {
          title: "New Jersey State Police",
          description:
            "Request a comprehensive criminal history record, which may require submitting fingerprints.",
        },
      ],
    },
    {
      label: "Fingerprinting for Expungement",
      value: "fingerprinting-for-expungement",
      desc: "Fingerprinting may be necessary to confirm your identity:",
      list: [
        {
          title: "Schedule an Appointment",
          description:
            "Use an approved fingerprinting service authorized by the New Jersey State Police.",
        },
        {
          title: "Submit Fingerprints",
          description:
            "Your fingerprints will be taken electronically and submitted to the state police.",
        },
        {
          title: "Obtain a Receipt",
          description:
            "Include the fingerprinting receipt with your expungement petition.",
        },
      ],
    },
    {
      label: "Information You Need",
      value: "info-you-need",
      desc: "Prepare the following details:",
      list: [
        {
          title: "Date of Arrest",
          description: "Exact dates for each arrest.",
        },
        {
          title: "Offense or Charges",
          description: "Specific charges and related statute numbers.",
        },
        {
          title: "Court Case Number (Docket Number)",
          description: "Assigned numbers for each case.",
        },
        {
          title: "Case Outcome",
          description: "Dispositions such as guilty, not guilty, or dismissed.",
        },
        {
          title: "Sentence Completion Proof",
          description:
            "Documentation of completed jail time, probation, or fines paid.",
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

export default HowToGetYourRecords;
