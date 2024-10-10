import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";

const WhatIsExpungement = () => {
  const heading = "What is Expungement?";
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Expungement is a legal process that removes or seals certain
            criminal or juvenile records from public access. After an
            expungement, these records are not visible to most employers,
            landlords, or the general public during background checks. However,
            law enforcement agencies, courts, and certain government entities
            can still access them under specific circumstances, such as future
            criminal investigations or particular job applications.
          </Typography>
          <Typography color="gray" className="py-1 mt-2 w-1/2 text-2xl">
            In New Jersey, expungement applies to records held by courts, law
            enforcement agencies, and detention centers. This process allows
            individuals to move forward without past records impacting their
            employment, housing, or personal opportunities.
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default WhatIsExpungement;
