import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const LegalAidServices = () => {
  const heading = "Legal Aid Services";
  const listPoints = [
    {
      title: "Pro Bono Programs",
      description: "Organizations offering free or reduced-cost legal assistance.",
    },
    {
      title: "Legal Clinics",
      description: "Community resources providing legal advice and assistance.",
    },
    {
      title: "Lawyer Referral Services",
      description: "Help in finding an attorney suited to your needs.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            These are few known legal aid services:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default LegalAidServices;
