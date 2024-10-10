import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const FamilyCourtOverview = () => {
  const heading = "Family Court Overview";
  const listPoints = [
    {
      title: "Divorce and Separation",
      description: "",
    },
    {
      title: "Child Custody and Support",
      description: "",
    },
    {
      title: "Adoption and Guardianship",
      description: "",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Family courts deal with matters like:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default FamilyCourtOverview;
