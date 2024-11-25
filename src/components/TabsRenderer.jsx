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

  const getInitialTab = () => {
    let tabsDetails = JSON.parse(localStorage.getItem(id)) || {}
    if (tabsDetails?.activeTab === undefined) {
      tabsDetails = {
        activeTab: formConfig[0]["value"],
        progress: 0
      }
      localStorage.setItem(id, JSON.stringify(tabsDetails))
    }
    return tabsDetails || {};
  };


  const [tabDetails, updateActiveTab] = React.useState(getInitialTab);
  const [activeForm, updateActiveForm] = React.useState(formConfig);

  const updateTabDetails = (tab_id, value) => {
    updateActiveForm(prev => {
      const newState = [...prev];
      const index = newState.findIndex(item => item.value === tab_id);
      newState[index] = { ...newState[index], ...value };
      return newState;
    });
  };

  const updateFormDetails = (
    selectedOptions, 
    fieldId, 
    option, 
    isChecked, 
    conditionalTabs
  ) => {
    if (conditionalTabs) {
      if (fieldId === conditionalTabs.field_id) {
        const optionSelected = option;
        for (let action of conditionalTabs["subTabs"][optionSelected]) {
          if (action.type === "remove") {
            updateActiveForm(prev => prev.filter(item => item.value !== action.tab));
          } else if (action.type === "add") {
            updateActiveForm(prev => {
              if (
                prev[action.index] &&
                prev[action.index].value === action.tab
              ) {
                return prev;
              }

              const filteredPrev = prev.filter(item => item.value !== action.tab);
              const index = formConfig.findIndex(item => item.value === action.tab)

              const updatedForm = [
                ...filteredPrev.slice(0, action.index),
                formConfig[index],
                ...filteredPrev.slice(action.index),
              ];

              return updatedForm;
            })
          }
        }
      }
    }
  };

  // Hack for smooter transistions
  // https://github.com/creativetimofficial/material-tailwind/issues/364
  React.useEffect(() => {
    localStorage.setItem(id, JSON.stringify(tabDetails));

    setTimeout(() => {
      const tabButton = document.querySelector(`li[data-value="${tabDetails.activeTab}"]`);
      if (tabButton) {
        tabButton.click();
      }
    }, 0);
  }, [tabDetails]);

  const handleTabChange = (value) => {
    if (value != tabDetails.activeTab){
      const valueIndex = activeForm.findIndex((item) => item.value === value);
      const activeIndex = activeForm.findIndex((item) => item.value === tabDetails.activeTab);
      const activeTabDetails = activeForm[activeIndex];
      if (activeIndex < tabDetails.progress && !activeTabDetails.complete) {
        setTimeout(() => {
          const tabButton = document.querySelector(`li[data-value="${tabDetails.activeTab}"]`);
          tabButton.click();
        }, 0);
      } else if (valueIndex <= tabDetails.progress) {
        updateActiveTab((prev) => ({
          ...prev,
          activeTab: value,
        }))
      } else if (valueIndex > tabDetails.progress || !activeTabDetails.complete) {
        // Come back to current tab as we have not finished it
        setTimeout(() => {
          const tabButton = document.querySelector(`li[data-value="${tabDetails.activeTab}"]`);
          tabButton.click();
        }, 0);
      }
    }
  }
  console.log(activeForm)

  const isTabComplete = (index, complete) => {
    if(activeForm[index].complete != complete) {
      updateActiveForm(prev => {
        const newForm = [...prev];
        newForm[index] = { ...newForm[index], complete: complete };
        return newForm;
      });
    }
  };
  

  return (
    <Tabs className="mt-6" value={tabDetails.activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 overflow-x-auto whitespace-nowrap"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none ",
        }}
      >
        {activeForm.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => handleTabChange(value)}
            className={tabDetails.activeTab === value ? "text-gray-900 w-96 wd:w-full" : ""}
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
              className="py-1 md:w-1/2 text-2xl mx-auto text-center"
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
              moveNextTab={() => 
                {
                  updateActiveTab((prev) => ({
                    activeTab: activeForm[index + 1]["value"],
                    progress: Math.max(index + 1, prev.progress)
                  }))
                }
              }    
              movePrevTab={() => 
                updateActiveTab((prev) => ({
                  ...prev,
                  activeTab: activeForm[index - 1]["value"],
                }))
              }
              isFirstTab={item.value === activeForm[0].value}
              isLastTab={item.value === activeForm[activeForm.length - 1].value}
              isTabComplete={(complete) => isTabComplete(index, complete)}
              updateFormDetails={
                (
                  selectedOptions, 
                  fieldId, 
                  option, 
                  isChecked
                ) => updateFormDetails(
                  selectedOptions, 
                  fieldId, 
                  option, 
                  isChecked, 
                  item.conditionalTabs
                )
              }
            />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabsRenderer;
