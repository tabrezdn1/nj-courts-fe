import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { courtLocationsAndContact } from "../../data/configs";

const CourtLocationsAndContact = () => {
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={courtLocationsAndContact.heading} />
        <CardBody className="font-normal px-8">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            {courtLocationsAndContact.introduction}
          </Typography>
          <PointsList listPoints={courtLocationsAndContact.listPoints}/>
        </CardBody>
      </Card>
    </>
  );
};

export default CourtLocationsAndContact;
