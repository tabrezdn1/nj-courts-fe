import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { glossaryOfLegalTerms } from "../../data/configs";

const GlossaryOfLegalTerms = () => {
  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="glossary-heading"
    >
      <Heading heading={glossaryOfLegalTerms.heading} id="glossary-heading" />
      <CardBody className="font-normal px-8" role="document">
        <Typography
          color="gray"
          className="py-1 w-1/2 text-2xl"
          aria-label="Glossary Subheading"
        >
          {glossaryOfLegalTerms.subHeading}
        </Typography>
        <PointsList
          listPoints={glossaryOfLegalTerms.listPoints}
          aria-label="List of legal terms and definitions"
        />
      </CardBody>
    </Card>
  );
};

export default GlossaryOfLegalTerms;
