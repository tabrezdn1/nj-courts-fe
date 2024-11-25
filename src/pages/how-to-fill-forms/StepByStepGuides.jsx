import React, { useState } from "react";
import { Card, CardBody, Tabs, TabsHeader, TabsBody, Tab, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CardWithLink from "../../components/CardWithLink";
import {stepByStepGuides} from "../../data/configs";

const StepByStepGuides = () => {
  const [activeTab, updateActiveTab] = useState("expungement-form-guide");

  return (
    <Card className="w-full md:h-[calc(100vh-2rem)] md:overflow-y-auto">
      <Heading heading={stepByStepGuides.heading} />
      <CardBody className="font-normal px-8">
        <Tabs className="mt-6 w-auto" value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {stepByStepGuides.tabs.map(({ label, value }) => (
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
          <TabsBody className="pt-8">
            {stepByStepGuides.tabs.map(
              ({ value, list }) =>
                activeTab === value && (
                  <CardWithLink key={value} steps={list} />
                )
            )}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default StepByStepGuides;
