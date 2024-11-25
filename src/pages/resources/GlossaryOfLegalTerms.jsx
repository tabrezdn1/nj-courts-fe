import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { glossaryOfLegalTerms } from "../../data/configs";

const GlossaryOfLegalTerms = () => {
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={glossaryOfLegalTerms.heading} />
        <CardBody className="font-normal px-8">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            {glossaryOfLegalTerms.subHeading}
          </Typography>
          <PointsList listPoints={glossaryOfLegalTerms.listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default GlossaryOfLegalTerms;
