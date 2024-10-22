import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import NumberedSection from "../../components/NumberedSection"; // Import NumberedSection
import { useState } from "react";

const StepByStepGuides = () => {
  const heading = "Required Documents";
  const [activeTab, updateActiveTab] = useState("expungement-form-guide");

  // Steps for the Expungement Form Guide with listPoints instead of content
  const expungementSteps = [
    {
      description: "Criminal Records.",
      listPoints: [
        {
          title: "Arrest Records",
          description: "You will need to provide a copy of your arrest records and any related police reports."
        },
        {
          title: "Required Documents",
          description: "Ensure you have all required documents before proceeding."
        }
      ]
    },
    {
      description: "Gather Necessary Documents.",
      listPoints: [
        {
          title: "Court Documents",
          description: "Collect all relevant court records and legal documents."
        },
        {
          title: "Identification",
          description: "Ensure you have a valid ID for identity verification."
        }
      ]
    },
    {
      description: "Complete the Petition for Expungement (Form A).",
      listPoints: [
        {
          title: "Filling Out Form A",
          description: "Accurately complete all fields in Form A."
        },
        {
          title: "Attachments",
          description: "Attach the required documents to the petition."
        }
      ]
    },
    {
      description: "File the Petition with the Court.",
      listPoints: [
        {
          title: "Submission",
          description: "Submit your completed petition to the court for processing."
        },
        {
          title: "Court Response",
          description: "Wait for the court to respond to your filing."
        }
      ]
    },
  ];

  // Steps for the Civil Complaint Form Guide
  const civilComplaintSteps = [
    {
      description: "Identify Parties Involved.",
      listPoints: [
        {
          title: "Plaintiffs and Defendants",
          description: "List the full names and addresses of all parties."
        },
        {
          title: "Legal Status",
          description: "Determine the legal status of each party."
        }
      ]
    },
    {
      description: "Establish Jurisdiction.",
      listPoints: [
        {
          title: "Jurisdiction Criteria",
          description: "Explain why this court has jurisdiction over the case."
        },
        {
          title: "Venue",
          description: "Confirm the appropriate venue for the case."
        }
      ]
    },
    {
      description: "Draft the Civil Complaint.",
      listPoints: [
        {
          title: "Claim Statement",
          description: "Provide a clear and concise statement of your claims."
        },
        {
          title: "Relief Requested",
          description: "Specify the legal relief you are seeking."
        }
      ]
    },
    {
      description: "File the Complaint in Court.",
      listPoints: [
        {
          title: "Submission",
          description: "Submit the complaint and supporting documents to the court."
        },
        {
          title: "Court Fees",
          description: "Pay any required court filing fees."
        }
      ]
    },
  ];

  // Steps for the Family Court Petition Guide
  const familyCourtSteps = [
    {
      description: "Provide Petitioner and Respondent Information.",
      listPoints: [
        {
          title: "Petitioner Details",
          description: "Include full name, address, and contact information."
        },
        {
          title: "Respondent Details",
          description: "Include full name, address, and contact information of the respondent."
        }
      ]
    },
    {
      description: "Specify Child Information (if applicable).",
      listPoints: [
        {
          title: "Children Involved",
          description: "Provide details of the children involved in the case."
        },
        {
          title: "Living Arrangements",
          description: "Specify the current living arrangements of the children."
        }
      ]
    },
    {
      description: "Outline the Grounds for Action.",
      listPoints: [
        {
          title: "Legal Grounds",
          description: "Explain the legal grounds for your petition."
        },
        {
          title: "Supporting Evidence",
          description: "Provide any supporting evidence for your case."
        }
      ]
    },
    {
      description: "Submit Requested Orders to the Court.",
      listPoints: [
        {
          title: "Requested Orders",
          description: "Detail the orders you are requesting from the court."
        },
        {
          title: "Court Review",
          description: "Wait for the court to review and respond to your petition."
        }
      ]
    },
  ];

  // Steps for General Required Documents Guide
  const GeneralRequDocumentsSteps = [
    {
      description: "Identification Documents",
      listPoints: [
        {
          title: "Government ID",
          description: "a copy of your state-issued driver's license, passport, or another form of identification will be required to confirm your identity."
        },
        {
          title: "Social Security Card",
          description: "Some forms may ask for verification of your Social Security number."
        }
      ]
    },
    {
      description: "Court Case Numbers and Legal Records",
      listPoints: [
        {
          title: "Case Numbers",
          description: "Any prior case numbers related to your current legal matter. For example, if you are seeking expungement, you will need the case number of the criminal case you wish to expunge"
        },
        {
          title: "Prior Court Orders",
          description: "A utility bill, lease agreement, or other official document showing your current address may be requested to establish residency"
        }
      ]
    },
    {
      description: "Proof of Address",
      listPoints: [
        {
          title: "Utility Bills",
          description: "Submit a recent utility bill as proof of address."
        },
        {
          title: "Lease Agreement",
          description: "Provide a copy of your lease agreement if applicable."
        }
      ]
    },
  ];

  const tabsData = [
    {
      label: "General Required Documents",
      value: "General-Required-Documents",
      steps: GeneralRequDocumentsSteps,
      additionalSteps: [], // No additional steps for this section
    },
    {
      label: "Expungement Form Guide",
      value: "expungement-form-guide",
      steps: expungementSteps,
      additionalSteps: [],
    },
    {
      label: "Civil Complaint Form Guide",
      value: "civil-complaint-form-guide",
      steps: civilComplaintSteps,
      additionalSteps: [], // No additional steps for this section
    },
    {
      label: "Family Court Petition Guide",
      value: "family-court-petition-guide",
      steps: familyCourtSteps,
      additionalSteps: [], // No additional steps for this section
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
                className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
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
              {tabsData.map(({ value, steps, additionalSteps }) => (
                <TabPanel key={value} value={value}>
                  {/* Numbered Section for each guide */}
                  <NumberedSection heading={`${value.replace('-', ' ')} Steps`} items={steps} />

                  {/* Display Additional Steps if available */}
                  {additionalSteps.length > 0 && (
                    <div className="mt-12">
                      <NumberedSection heading="Additional Steps" items={additionalSteps} />
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default StepByStepGuides;
