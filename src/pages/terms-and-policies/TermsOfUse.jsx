import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { termsOfUse } from "../../data/configs";

const TermsOfUse = () => {
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={termsOfUse.heading} />
        <CardBody className="font-normal px-8">
          <Typography color="gray" className="py-1 md:w-1/2 text-2xl">
            {termsOfUse.subheading}
          </Typography>
          <PointsList listPoints={termsOfUse.listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default TermsOfUse;
