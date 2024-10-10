import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const PrivacyPolicy = () => {
  const heading = "Privacy Policy";
  const listPoints = [
    {
      title: "Data Protection",
      description: " Measures we take to secure your personal information.",
    },
    {
      title: "Data Usage",
      description: "How your information is used within our services.",
    },
    {
      title: "Cookies and Tracking",
      description: "Information on website tracking technologies.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Policy:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default PrivacyPolicy;
