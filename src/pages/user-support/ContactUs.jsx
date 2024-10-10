import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const ContactUs = () => {
  const heading = "Contact Us";
  const listPoints = [
    {
      title: "Email Support",
      description: "support@njcourtsforms.gov",
    },
    {
      title: "Phone Support",
      description: "1-800-XXX-XXXX (Monday to Friday, 9 AM - 5 PM)",
    },
    {
      title: "Live Chat",
      description: "Chat with a support agent for immediate assistance.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Get in touch:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default ContactUs;
