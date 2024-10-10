import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const CivilCourtCommonForms = () => {
  const heading = "Civil Court Common Forms";
  const listPoints = [
    {
      title: "Complaint Form",
      description: "Start a civil lawsuit.",
    },
    {
      title: "Summons",
      description: "Notify the defendant of legal action.",
    },
    {
      title: "Answer Form",
      description: "Respond to a lawsuit filed against you.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            These are the mostly and widely used forms:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default CivilCourtCommonForms;
