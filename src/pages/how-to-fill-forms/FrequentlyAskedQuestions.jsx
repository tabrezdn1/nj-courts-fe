import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { frequentlyAskedQuestions } from "../../data/configs";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={frequentlyAskedQuestions.heading} />
        <CardBody className="font-normal px-8">
          <Typography color="gray" className="py-1 md:w-1/2 text-2xl">
            {frequentlyAskedQuestions.bodyText}
          </Typography>
          <PointsList listPoints={frequentlyAskedQuestions.listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default FrequentlyAskedQuestions;
