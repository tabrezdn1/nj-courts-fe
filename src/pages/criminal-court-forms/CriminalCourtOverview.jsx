import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";

const CriminalCourtOverview = () => {
  const heading = "Criminal Court Overview";
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Criminal courts handle cases involving alleged violations of
            criminal law.
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default CriminalCourtOverview;
