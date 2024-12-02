import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { privacyPolicy } from "../../data/configs";

const PrivacyPolicy = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="privacy-policy-heading"
    >
      <Heading heading={privacyPolicy.heading} id="privacy-policy-heading" />
      <CardBody className="font-normal px-8" role="document">
        <Typography
          color="gray"
          className="py-1 md:w-1/2 text-2xl"
          aria-label="Privacy Policy Subheading"
        >
          {privacyPolicy.subHeading}
        </Typography>
        <PointsList
          listPoints={privacyPolicy.listPoints}
          aria-label="List of points in the privacy policy"
        />
      </CardBody>
    </Card>
  );
};

export default PrivacyPolicy;
