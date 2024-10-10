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

const ExpungementProcess = () => {
  const heading = "Expungement Process";
  const [activeTab, updateActiveTab] = useState("steps-to-apply");
  const tabsData = [
    {
      label: "Steps to Apply",
      value: "steps-to-apply",
      desc: "",
      list: [
        {
          title: "Check Eligibility",
          description:
            "Ensure you meet the criteria based on your offense and time elapsed since conviction.",
        },
        {
          title: "Collect Necessary Documents",
          description:
            "Gather your criminal records, court case numbers, and proof of completed sentences.",
        },
        {
          title: "File a Petition",
          description:
            "Submit a Petition for Expungement to the Superior Court in the county where the conviction occurred.",
        },
        {
          title: "Notify Agencies",
          description:
            "Send required notices to law enforcement agencies, the prosecutor’s office, and other relevant parties.",
        },
        {
          title: "Attend a Court Hearing",
          description:
            "If scheduled, appear at the hearing where a judge will review your petition.",
        },
        {
          title: "Receive the Court’s Decision",
          description:
            "If approved, the court will issue an expungement order.",
        },
      ],
    },
    {
      label: "Required Documents",
      value: "required-documents",
      desc: "",
      list: [
        {
          title: "Criminal Records",
          description:
            "Details of arrests, charges, convictions, case numbers, and dates.",
        },
        {
          title: "Proof of Sentence Completion",
          description:
            "Documentation showing all sentences, probation, and fines are fulfilled.",
        },
        {
          title: "Fingerprint Records",
          description:
            "May be required to verify your identity during the process.",
        },
      ],
    },
    {
      label: "How Long Does It Take?",
      value: "how-long-does-take",
      desc: "The expungement process can take several months:",
      list: [
        {
          title: "Processing the Petition",
          description:
            "The court may take a few weeks to process your submission and schedule hearings.",
        },
        {
          title: "Notification Period",
          description:
            "There is typically a waiting period to allow notified agencies to respond.",
        },
        {
          title: "Final Decision",
          description:
            "After approval, it may take additional weeks for records to be updated across agencies.",
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

export default ExpungementProcess;
