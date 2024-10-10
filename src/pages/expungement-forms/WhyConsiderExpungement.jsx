import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const WhyConsiderExpungement = () => {
  const heading = "Why consider Expungement?";
  const listPoints = [
    {
      title: "Employment Opportunities",
      description:
        "Expunged records won't appear in most job background checks, enhancing your employment prospects.",
    },
    {
      title: "Housing Applications",
      description:
        "Landlords typically won't see expunged records, improving your chances of securing housing.",
    },
    {
      title: "Personal Freedom",
      description:
        "Provides a fresh start, allowing you to move forward without the burden of past mistakes.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Expungement offers several benefits:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default WhyConsiderExpungement;
