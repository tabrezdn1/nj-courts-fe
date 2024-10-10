import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const FrequentlyAskedQuestions = () => {
  const heading = "Frequently Asked Questions(FAQ)";
  const listPoints = [
    {
      title: "Do I need an attorney to apply for expungement?",
      description:
        "While not required, consulting an attorney can help navigate the process.",
    },
    {
      title: "Can all criminal records be expunged?",
      description:
        "No, certain serious offenses are not eligible for expungement in New Jersey.",
    },
    {
      title: "What if my petition for expungement is denied?",
      description:
        "You may consult legal counsel to explore options, which might include reapplying after a certain period.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Some of the questions:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default FrequentlyAskedQuestions;
