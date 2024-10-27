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

const TabsRenderer = ({ id, formConfig }) => {
  let tabsDetails = {}

  const getInitialTab = () => {
    tabsDetails = JSON.parse(localStorage.getItem(id)) || {}
    if (tabsDetails?.activeTab === undefined) {
      tabsDetails.activeTab = formConfig[0]["value"]
      localStorage.setItem(id, JSON.stringify(tabsDetails))
    }
    return tabsDetails.activeTab;
  };


  const [activeTab, updateActiveTab] = React.useState(getInitialTab);
  const [activeForm, updateActiveForm] = React.useState(formConfig);

  const updateTabDetails = (tab_id, value) => {
    updateActiveForm(prev => {
      const newState = [...prev];
      const index = newState.findIndex(item => item.value === tab_id);
      newState[index] = { ...newState[index], ...value };
      return newState;
    });
  };

  // Hack for smooter transistions
  // https://github.com/creativetimofficial/material-tailwind/issues/364
  React.useEffect(() => {
    tabsDetails.activeTab = activeTab
    localStorage.setItem(id, JSON.stringify(tabsDetails));

    setTimeout(() => {
      const tabButton = document.querySelector(`li[data-value="${activeTab}"]`);
      if (tabButton) {
        tabButton.click();
      }
    }, 0);
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
        {activeForm.map(({ label, value }) => (
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
        {activeForm.map((item, index) => (
          <TabPanel key={item.value} value={item.value}>
            <Typography
              color="gray"
              className="py-1 w-1/2 text-2xl mx-auto text-center"
            >
              {item.desc}
            </Typography>
            {item.value !== "submit" && (
              <>{item.list?.length > 0 && <PointsList listPoints={item.list} />}</>
            )}
            <FormStepper
              id={`${id}-${item.value}`}
              steps={item.stepper}
              tabDetails={item}
              formConfig={formConfig}
              updateTabDetails={updateTabDetails}
              moveNextTab={() => updateActiveTab(activeForm[index + 1]["value"])}
              movePrevTab={() => updateActiveTab(activeForm[index - 1]["value"])}
              isFirstTab={item.value === activeForm[0].value}
              isLastTab={item.value === activeForm[activeForm.length - 1].value}
            />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabsRenderer;
