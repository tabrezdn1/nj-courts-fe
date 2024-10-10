import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const UnderstandingCF = () => {
  const heading = "Understanding Court Forms";
  const listPoints = [
    {
      title: "Compliance",
      description: "Ensuring you meet all legal requirements.",
    },
    {
      title: "Efficiency",
      description: "Saving time by knowing what information is needed.",
    },
    {
      title: "Accuracy",
      description:
        "Reducing the likelihood of errors that could delay your case.",
    },
  ];

  return (
    <>
      <Card className="w-full p-8 h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="p-8 font-normal">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Court forms are official documents required to initiate or respond
            to legal proceedings. Familiarizing yourself with these forms is
            crucial for:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default UnderstandingCF;
