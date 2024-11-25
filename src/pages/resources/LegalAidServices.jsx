import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { legalAidServices } from "../../data/configs";

const LegalAidServices = () => {
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={legalAidServices.heading} />
        <CardBody className="font-normal px-8">
          <Typography color="gray" className="py-1 md:w-1/2 text-2xl">
            {legalAidServices.description}
          </Typography>
          <PointsList listPoints={legalAidServices.listPoints}/>
        </CardBody>
      </Card>
    </>
  );
};

export default LegalAidServices;
