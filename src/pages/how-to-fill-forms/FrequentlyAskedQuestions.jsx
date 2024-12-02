import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { frequentlyAskedQuestions } from "../../data/configs";

const FrequentlyAskedQuestions = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="faq-heading"
    >
      <Heading heading={frequentlyAskedQuestions.heading} id="faq-heading" />
      <CardBody className="font-normal px-8" role="document">
        <Typography
          color="gray"
          className="py-1 md:w-1/2 text-2xl"
          aria-label="Frequently Asked Questions Introduction"
        >
          {frequentlyAskedQuestions.bodyText}
        </Typography>
        <PointsList
          listPoints={frequentlyAskedQuestions.listPoints}
          aria-label="List of frequently asked questions"
        />
      </CardBody>
    </Card>
  );
};

export default FrequentlyAskedQuestions;
