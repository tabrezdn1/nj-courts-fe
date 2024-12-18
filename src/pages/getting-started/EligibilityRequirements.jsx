import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { eligibilityData } from "../../data/configs";

const EligibilityRequirements = () => {
  const { heading, introduction, listPoints } = eligibilityData;

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="eligibility-requirements-heading"
    >
      <Heading heading={heading} id="eligibility-requirements-heading" />
      <CardBody className="font-normal md:px-12" role="document">
        <Typography
          color="black"
          className="py-1 w-1/2 text-2xl"
          aria-label="Introduction to eligibility requirements"
        >
          {introduction}
        </Typography>
        <PointsList listPoints={listPoints} />
      </CardBody>
    </Card>
  );
};

export default EligibilityRequirements;
