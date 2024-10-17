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
import ExpungementFormSubmit from "../pages/expungement-forms/ExpungementFormSubmit";
const TabsRenderer = ({ tabItems, formData, updateField }) => {
  const [activeTab, updateActiveTab] = React.useState(tabItems[0]["value"]);
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
        {tabItems.map(({ value, desc, list, stepper }) => (
          <TabPanel key={value} value={value}>
            <Typography color="gray" className="py-1 w-1/2 text-2xl">
              {desc}
            </Typography>
            {value !== "submit" && (
              <>
                {list?.length > 0 && <PointsList listPoints={list} />}
              </>
            )}
            <FormStepper tab_id={value}  steps={stepper} activeTab={activeTab} formData={formData} updateField={updateField}/>
            {value === "submit" && <ExpungementFormSubmit />}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabsRenderer;
