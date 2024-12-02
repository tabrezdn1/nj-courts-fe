import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { expungementEligibilityCriteria } from "../../data/configs";

const ExpungementEligibilityCriteria = () => {
  const { heading, listPoints, introText } = expungementEligibilityCriteria;

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="expungement-eligibility-criteria-heading"
    >
      <Heading
        heading={heading}
        id="expungement-eligibility-criteria-heading"
      />
      <CardBody className="font-normal px-6" role="document">
        <Typography
          color="black"
          className="py-1 w-full md:w-1/2 text-2xl"
          aria-live="polite"
        >
          {introText}
        </Typography>
        <PointsList listPoints={listPoints} />
      </CardBody>
    </Card>
  );
};

export default ExpungementEligibilityCriteria;
