import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const TermsOfUse = () => {
  const heading = "Terms of use";
  const listPoints = [
    {
      title: "Acceptable Use",
      description: "Rules governing how you may use the portal.",
    },
    {
      title: "Disclaimer",
      description:
        "Limitation of liability regarding the information provided.",
    },
    {
      title: "Modification of Terms",
      description: "How and when terms may be updated.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Terms and Conditions applies*
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default TermsOfUse;
