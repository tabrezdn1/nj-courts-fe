import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import Heading from "../../components/Heading"
const FamilyCourtRequiredDocuments = () => {
    const heading = "Family Court Required Documents";
  return (
    <>
      <Card className="w-full p-8 h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading}/>
        <CardBody className="p-8 font-normal">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            We are dedicated to making the legal system more accessible to the
            residents of New Jersey. Our goal is to simplify the process of
            filling out court forms by providing clear instructions and online
            tools, reducing the stress and confusion often associated with legal
            paperwork.
          </Typography>
        </CardBody>
      </Card>
    </>
  );
}

export default FamilyCourtRequiredDocuments;
