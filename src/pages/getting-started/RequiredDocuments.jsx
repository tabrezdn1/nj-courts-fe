import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const RequiredDocuments = () => {
  const heading = "Required Documents";
  const listPoints = [
    {
      title: "Identification",
      description: "Valid photo ID (e.g., driver's license, passport).",
    },
    {
      title: "Case-Specific Documents",
      description:
        "Relevant to your legal matter (e.g., previous court orders, police reports).",
    },
    {
      title: "Financial Records",
      description: "If applicable, such as income statements or tax returns.",
    },
  ];

  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Prepare the following:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default RequiredDocuments;
