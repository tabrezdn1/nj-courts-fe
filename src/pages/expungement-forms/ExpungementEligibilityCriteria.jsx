import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const ExpungementEligibilityCriteria = () => {
  const heading = "Expungement Eligibility Criteria";
  const listPoints = [
    {
      title: "Disorderly Persons Offenses and Petty Offenses",
      description: "Eligible after a waiting period of 5 years.",
    },
    {
      title: "Indictable Offenses (Felony Convictions)",
      description:
        "May be expunged after 10 years, though eligibility is stricter.",
    },
    {
      title: "Completion of Sentences",
      description:
        "All sentences, probation, and fines must be fully completed.",
    },
    {
      title: "Ineligible Offenses",
      description:
        "Certain serious crimes like murder, kidnapping, sexual assault, and offenses committed by public officials are not eligible for expungement.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            You may be eligible for expungement in New Jersey if:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default ExpungementEligibilityCriteria;
