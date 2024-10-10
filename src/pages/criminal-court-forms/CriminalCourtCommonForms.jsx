import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const CriminalCourtCommonForms = () => {
  const heading = "Criminal Court Common Forms";
  const listPoints = [
    {
      title: "Plea Forms",
      description: "Enter a plea of guilty or not guilty.",
    },
    {
      title: "Bail Applications",
      description: "Request release from custody pending trial.",
    },
    {
      title: "Appeal Notices",
      description: "Appeal a court's decision to a higher court.",
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

export default CriminalCourtCommonForms;
