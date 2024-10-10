import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const HowItWorks = () => {
  const heading = "How it Works?";
  const listPoints = [
    {
      title: "Easy Access",
      description: "Find all the court forms you need in one place.",
    },
    {
      title: "Guided Assistance",
      description:
        "Step-by-step instructions to help you complete forms correctly.",
    },
    {
      title: "Secure Submission",
      description:
        "Submit your forms online securely or print them for in-person filing.",
    },
  ];
  return (
    <>
      <Card className="w-full p-8 h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="p-8 font-normal">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Our platform offers:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default HowItWorks;
