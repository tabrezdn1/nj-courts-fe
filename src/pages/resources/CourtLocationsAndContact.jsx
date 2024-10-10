import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const CourtLocationsAndContact = () => {
  const heading = "Court Locations and Contact";
  const listPoints = [
    {
      title: "Find a Court",
      description: "Addresses and contact information for courts in each New Jersey county.",
    },
    {
      title: "Operating Hours",
      description: "Standard hours and holiday schedules.",
    },
    {
      title: "Accessibility Services",
      description: "Information on services for individuals with disabilities.",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Contact Court:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default CourtLocationsAndContact;
