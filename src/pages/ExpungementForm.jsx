import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Heading from "../components/Heading";
import PointsList from "../components/PointsList";
import { useState } from "react";
const ExpungementForm = () => {
  const heading = "ONLINE FORM";
  const [activeTab, updateActiveTab] = useState("personal-details");
  const tabsData = [
    {
      label: "Personal Details",
      value: "personal-details",
      desc: "In Dev",
      list: [],
    },
    {
      label: "Criminal Records",
      value: "criminal records",
      desc: "Told you its in Dev!",
      list: [],
    },
    {
      label: "Submit",
      value: "submit",
      desc: "Comon bro!!!",
      list: [],
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

export default ExpungementForm;
