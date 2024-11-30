import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { contactUs } from "../../data/configs";

const ContactUs = () => {
  return (
    <>
      <Card className="w-full overflow-y-auto mt-16 md:mt-0" shadow={false}>
        <Heading heading={contactUs.heading} />
        <CardBody className="font-normal px-8">
          <Typography color="gray" className="py-1 md:w-1/2 text-2xl">
            {contactUs.subHeading}
          </Typography>
          <PointsList listPoints={contactUs.listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default ContactUs;
