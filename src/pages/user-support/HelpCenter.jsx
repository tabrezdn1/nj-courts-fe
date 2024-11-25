import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { helpCenter } from "../../data/configs";

const HelpCenter = () => {
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={helpCenter.heading} />
        <CardBody className="font-normal px-8">
          <Typography color="gray" className="py-1 md:w-1/2 text-2xl">
            {helpCenter.subHeading}
          </Typography>
          <PointsList listPoints={helpCenter.listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default HelpCenter;
