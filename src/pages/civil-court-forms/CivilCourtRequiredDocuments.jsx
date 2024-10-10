import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";

const CivilCourtRequiredDocuments = () => {
  const heading = "Civil Court Required Documents";
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            STILL IN DEVELOPMENT
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default CivilCourtRequiredDocuments;
