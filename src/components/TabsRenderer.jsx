import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";

import PointsList from "./PointsList";
import FormStepper from "./FormStepper";
const TabsRenderer = ({ tabItems }) => {
  const [activeTab, updateActiveTab] = React.useState(tabItems[0]["value"]);

  // Hack for smooter transistions
  // https://github.com/creativetimofficial/material-tailwind/issues/364
  React.useEffect(() => {
    const tabButton = document.querySelector(`li[data-value="${activeTab}"]`);
    if (tabButton) {
      tabButton.click();
    }
  }, [activeTab]);

  return (
    <Tabs className="mt-6 w-auto" value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {tabItems.map(({ label, value }) => (
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
        {tabItems.map(({ value, desc, list, stepper }, index) => (
          <TabPanel key={value} value={value}>
            <Typography
              color="gray"
              className="py-1 w-1/2 text-2xl mx-auto text-center"
            >
              {desc}
            </Typography>
            {value !== "submit" && (
              <>{list?.length > 0 && <PointsList listPoints={list} />}</>
            )}
            <FormStepper
              steps={stepper}
              activeTab={activeTab}
              moveNextTab={() => updateActiveTab(tabItems[index + 1]["value"])}
              movePrevTab={() => updateActiveTab(tabItems[index - 1]["value"])}
              isFirstTab={value === tabItems[0].value}
              isLastTab={value === tabItems[tabItems.length - 1].value}
            />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabsRenderer;
