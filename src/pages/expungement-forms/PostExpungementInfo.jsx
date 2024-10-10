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

const PostExpungementInfo = () => {
  const heading = "Post Expungement Information";
  const [activeTab, updateActiveTab] = useState("what-happens-after-expungement-is-granted");
  const tabsData = [
    {
      label: "What Happens After Expungement is Granted?",
      value: "what-happens-after-expungement-is-granted",
      desc: "",
      list: [
        {
          title: "Record Sealing",
          description:
            "Your records are sealed from public access.",
        },
        {
          title: "Legal Disclosure",
          description:
            "You can legally state that you have no criminal record on most applications.",
        },
        {
          title: "Exceptions",
          description:
            "Certain agencies may still access your records under specific circumstances.",
        },
      ],
    },
    {
      label: "Who Can Still See Expunged Records?",
      value: "who-can-see-expunged-records",
      desc: "",
      list: [
        {
          title: "Law Enforcement Agencies",
          description:
            "For investigations or sentencing in future cases.",
        },
        {
          title: "Certain Government Agencies",
          description:
            "Particularly those involving employment in law enforcement or judiciary positions.",
        },
      ],
    },
    {
      label: "Can Expungement Be Reversed?",
      value: "can-expungement-be-reversed",
      desc: "Expungements are generally permanent but may be reversed if:",
      list: [
        {
          title: "False Information",
          description: "The expungement was granted based on inaccurate information.",
        },
        {
          title: "New Convictions",
          description: "Committing another offense could impact the status of your expunged record.",
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

export default PostExpungementInfo;
