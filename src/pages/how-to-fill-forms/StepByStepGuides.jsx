import { useState } from "react";
import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CardWithLink from "../../components/CardWithLink";
import { stepByStepGuides } from "../../data/configs";

const StepByStepGuides = () => {
  const [activeTab, updateActiveTab] = useState("expungement-form-guide");

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="step-by-step-guides-heading"
    >
      <Heading
        heading={stepByStepGuides.heading}
        id="step-by-step-guides-heading"
      />
      <CardBody className="font-normal px-8">
        <Tabs
          className="mt-6 w-auto"
          value={activeTab}
          aria-label="Step by Step Guides"
        >
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {stepByStepGuides.tabs.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => updateActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
                aria-selected={activeTab === value}
                role="tab"
                id={`${value}-tab`}
                aria-controls={`${value}-panel`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="pt-8">
            {stepByStepGuides.tabs.map(
              ({ value, list }) =>
                activeTab === value && (
                  <CardWithLink
                    key={value}
                    steps={list}
                    role="tabpanel"
                    id={`${value}-panel`}
                    aria-labelledby={`${value}-tab`}
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
