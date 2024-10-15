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
import FormStepper from "../../components/FormStepper";
const ExpungementForm = () => {
  const heading = "ONLINE FORM";
  const [activeTab, updateActiveTab] = useState("personal-details");
  const tabsData = [
    {
      label: "Personal Details",
      value: "personal-details",
      desc: "Enter your personal details",
      list: [],
      stepper: [
        {
          title: "Full Name",
          helper:{
            title:"",
            content:"",
            helpLink:""
          },
          subtitle: "Enter your first name, middle name (if applicable), and last name. This should match the name used on any legal documents related to your case.",
          icon: "UserIcon",
          fields: [
            { type: 'input', label: "First Name", placeholder: "First Name" },
            { type: 'input', label: "Middle Name (if applicable)", placeholder: "Middle Name (if applicable)" },
            { type: 'input', label: "Last Name", placeholder: "Last Name" }
          ]
        },
        {
          title: "Contact Information",
          icon: "HomeIcon",
          fields: [
            { type: 'input', label: "Phone Number", placeholder: "Phone Number" },
            { type: 'input', label: "Email", placeholder: "Email" }
          ]
        }
      ]
    },
    {
      label: "Criminal Records",
      value: "criminal-records",
      desc: "Enter your criminal records",
      list: [],
      stepper: [
        {
          title: "Case Information",
          icon: "CogIcon",
          fields: [
            { type: 'input', label: "Case Number", placeholder: "Case Number" },
            { type: 'date', label: "Date of Conviction", placeholder: "Date of Conviction" }
          ]
        }
      ]
    },
    {
      label: "Submit",
      value: "submit",
      desc: "Submit your details",
      list: [],
      stepper: [
        {
          title: "Review and Submit",
          icon: "UserIcon",
          fields: [
            { type: 'textarea', label: "Additional Comments", placeholder: "Enter any additional comments" },
            { type: 'input', label: "Signature", placeholder: "Signature" }
          ]
        }
      ]
    },
    {
      label: "Employment History",
      value: "employment-history",
      desc: "Enter your employment history",
      list: [],
      stepper: [
        {
          title: "Previous Employment",
          icon: "UserIcon",
          fields: [
            { type: 'input', label: "Company Name", placeholder: "Company Name" },
            { type: 'input', label: "Job Title", placeholder: "Job Title" },
            { type: 'input', label: "Years of Employment", placeholder: "Years of Employment" }
          ]
        },
        {
          title: "Employment Type",
          icon: "CogIcon",
          fields: [
            { type: 'radio', label: "Employment Type", name: "employmentType", options: ["Full-Time", "Part-Time", "Contract"] }
          ]
        }
      ]
    },
    {
      label: "Education",
      value: "education",
      desc: "Enter your educational background",
      list: [],
      stepper: [
        {
          title: "Educational Details",
          icon: "HomeIcon",
          fields: [
            { type: 'input', label: "Institution Name", placeholder: "Institution Name" },
            { type: 'input', label: "Degree", placeholder: "Degree" },
            { type: 'date-range', label: "Years Attended", placeholder: "From - To" }
          ]
        }
      ]
    },
    {
      label: "References",
      value: "references",
      desc: "Enter your references",
      list: [],
      stepper: [
        {
          title: "Reference Details",
          icon: "CogIcon",
          fields: [
            { type: 'input', label: "Name", placeholder: "Name" },
            { type: 'input', label: "Relationship", placeholder: "Relationship" },
            { type: 'input', label: "Contact Information", placeholder: "Contact Information" },
            { type: 'checkbox', label: "Preferred Contact Method", name: "contactMethod", options: ["Phone", "Email", "Mail"] }
          ]
        }
      ]
    }
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
              {tabsData.map(({ value, desc, list, stepper }) => (
                <TabPanel key={value} value={value}>
                  <Typography color="gray" className="py-1 w-1/2 text-2xl">
                    {desc}
                  </Typography>
                  {list?.length > 0 && <PointsList listPoints={list} />}
                  <FormStepper steps={stepper} activeTab={activeTab} />
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
