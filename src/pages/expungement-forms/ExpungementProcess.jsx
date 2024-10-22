import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import PointsList from "../../components/PointsList";

const EligibilityCriteria = () => {
  const heading = "Expungement Process";
  const introductionText =
    "The expungement process in New Jersey allows individuals to remove or seal certain criminal records from public access. This process can help individuals move forward without the burden of a criminal record affecting employment, housing, and other opportunities. Below is a step-by-step guide to the expungement process:";

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="font-normal px-[64px]">
        <section className="mb-16">
          <CustomTypography variant="paragraph">
            {introductionText}
          </CustomTypography>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Determine Your Eligibility
          </CustomTypography>
          <CustomTypography variant="paragraph">
            Before starting the expungement process, you must first ensure that you are eligible. Eligibility is based on several factors, including the type of offense and how much time has passed since you completed your sentence. Generally, indictable offenses (felonies) require a 10-year waiting period, while disorderly persons offenses (misdemeanors) may be eligible after 5 years. Certain serious crimes, such as murder, sexual assault, and kidnapping, are not eligible for expungement.
          </CustomTypography>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Gather Required Documents
          </CustomTypography>
          <CustomTypography variant="paragraph">
            You will need to collect several documents to support your Petition for Expungement. These documents include:
          </CustomTypography>
          <PointsList
            listPoints={[
              {
                title: "Criminal Records",
                description:
                  "Obtain copies of your arrest records and court disposition records, which show the outcome of your case."
              },
              {
                title: "Proof of Sentence Completion",
                description:
                  "Documentation proving you have completed all terms of your sentence, including jail time, probation, fines, and restitution."
              },
              {
                title: "Case Information",
                description:
                  "Gather all relevant case numbers, docket numbers, and details from the court where your case was handled."
              }
            ]}
          />
        </section>
      </CardBody>
    </Card>
  );
};

export default EligibilityCriteria;
