import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const EligibilityRequirements = () => {
  const heading = "Eligibility Requirements";
  const listPoints = [
    {
      title: "Check Eligibility",
      description: "Different forms have specific eligibility criteria.",
    },
    {
      title: "Legal Consultation",
      description: "Consider seeking legal advice to confirm your eligibility.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Before you begin:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default EligibilityRequirements;
