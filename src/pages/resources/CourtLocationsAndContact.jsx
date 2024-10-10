import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";

const CourtLocationsAndContact = () => {
  const heading = "Court Locations and Contact";
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            We are dedicated to making the legal system more accessible to the
            residents of New Jersey. Our goal is to simplify the process of
            filling out court forms by providing clear instructions and online
            tools, reducing the stress and confusion often associated with legal
            paperwork.
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default CourtLocationsAndContact;
