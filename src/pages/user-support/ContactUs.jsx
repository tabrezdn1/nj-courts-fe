import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { contactUs } from "../../data/configs";

const ContactUs = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="contact-us-heading"
    >
      <Heading heading={contactUs.heading} id="contact-us-heading" />
      <CardBody className="font-normal px-8" role="document">
        <Typography
          color="gray"
          className="py-1 md:w-1/2 text-2xl"
          aria-label="Contact Us Subheading"
        >
          {contactUs.subHeading}
        </Typography>
        <PointsList
          listPoints={contactUs.listPoints}
          aria-label="List of contact options"
        />
      </CardBody>
    </Card>
  );
};

export default ContactUs;
