import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { courtLocationsAndContact } from "../../data/configs";

const CourtLocationsAndContact = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="court-locations-heading"
    >
      <Heading
        heading={courtLocationsAndContact.heading}
        id="court-locations-heading"
      />
      <CardBody className="font-normal px-8">
        <Typography
          color="black"
          className="py-1 w-1/2 text-2xl"
          aria-label="Introduction to court locations and contact information"
        >
          {courtLocationsAndContact.introduction}
        </Typography>
        <PointsList
          listPoints={courtLocationsAndContact.listPoints}
          aria-label="List of court locations and contact information"
        />
      </CardBody>
    </Card>
  );
};

export default CourtLocationsAndContact;
