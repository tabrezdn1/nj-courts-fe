import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { eligibilityData } from "../../data/configs";

const EligibilityRequirements = () => {
  const { heading, introduction, listPoints } = eligibilityData;

  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] mt-16 md:mt-0">
        <Heading heading={heading} />
        <CardBody className="font-normal md:px-12">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            {introduction}
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default EligibilityRequirements;
