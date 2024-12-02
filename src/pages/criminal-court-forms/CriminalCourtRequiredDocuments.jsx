import { Card, CardBody } from "@material-tailwind/react";
import ComingSoon from "../../components/ComingSoon";
import Heading from "../../components/Heading";

const CriminalCourtRequiredDocuments = () => {
  const heading = "Criminal Court Required Documents";

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="criminal-court-required-documents-heading"
    >
      <Heading
        heading={heading}
        id="criminal-court-required-documents-heading"
      />
      <CardBody
        className="flex items-center justify-center h-full"
        role="alert"
        aria-live="polite"
      >
        <ComingSoon />
      </CardBody>
    </Card>
  );
};

export default CriminalCourtRequiredDocuments;
