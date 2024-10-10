import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const FamilyCourtCommonForms = () => {
  const heading = "Family Court Common Forms";
  const listPoints = [
    {
      title: "Petition for Custody",
      description: "Request legal custody of a child.",
    },
    {
      title: "Child Support Worksheet",
      description: "Calculate financial support obligations.",
    },
    {
      title: "Divorce Complaint",
      description: "Initiate divorce proceedings.",
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

export default FamilyCourtCommonForms;
