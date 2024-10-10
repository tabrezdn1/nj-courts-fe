import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const GlossaryOfLegalTerms = () => {
  const heading = "Glossary of Legal Terms";
  const listPoints = [
    {
      title: "Expungement",
      description: "The legal process of sealing criminal records from public access.",
    },
    {
      title: "Petition",
      description: "A formal written request to the court.",
    },
    {
      title: "Disposition",
      description: "The final outcome of a case (e.g., conviction, acquittal, dismissal).",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Legal terms
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default GlossaryOfLegalTerms;
