import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { termsOfUse } from "../../data/configs";

const TermsOfUse = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="terms-of-use-heading"
    >
      <Heading heading={termsOfUse.heading} id="terms-of-use-heading" />
      <CardBody className="font-normal px-8" role="document">
        <Typography
          color="black"
          className="py-1 md:w-1/2 text-2xl"
          aria-label="Terms of Use Subheading"
        >
          {termsOfUse.subheading}
        </Typography>
        <PointsList
          listPoints={termsOfUse.listPoints}
          aria-label="List of points in the terms of use"
        />
      </CardBody>
    </Card>
  );
};

export default TermsOfUse;
