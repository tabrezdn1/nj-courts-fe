import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { helpCenter } from "../../data/configs";

const HelpCenter = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="help-center-heading"
    >
      <Heading heading={helpCenter.heading} id="help-center-heading" />
      <CardBody className="font-normal px-8" role="document">
        <Typography
          color="gray"
          className="py-1 md:w-1/2 text-2xl"
          aria-label="Help Center Subheading"
        >
          {helpCenter.subHeading}
        </Typography>
        <PointsList
          listPoints={helpCenter.listPoints}
          aria-label="List of help center topics"
        />
      </CardBody>
    </Card>
  );
};

export default HelpCenter;
