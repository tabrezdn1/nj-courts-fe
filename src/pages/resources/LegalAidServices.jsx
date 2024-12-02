import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { legalAidServices } from "../../data/configs";

const LegalAidServices = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="legal-aid-services-heading"
    >
      <Heading
        heading={legalAidServices.heading}
        id="legal-aid-services-heading"
      />
      <CardBody className="font-normal px-8" role="document">
        <Typography
          color="black"
          className="py-1 md:w-1/2 text-2xl"
          aria-label="Description of legal aid services"
        >
          {legalAidServices.description}
        </Typography>
        <PointsList
          listPoints={legalAidServices.listPoints}
          aria-label="List of legal aid services"
        />
      </CardBody>
    </Card>
  );
};

export default LegalAidServices;
