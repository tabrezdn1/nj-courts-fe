import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const HelpCenter = () => {
  const heading = "Help Center";
  const listPoints = [
    {
      title: "Getting Started Guides",
      description: "Tutorials on using the online portal.",
    },
    {
      title: "Technical Support",
      description: "Assistance with website issues or errors.",
    },
    {
      title: "Account Assistance",
      description:
        "Help with login issues, password resets, and account management.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Available support:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default HelpCenter;
