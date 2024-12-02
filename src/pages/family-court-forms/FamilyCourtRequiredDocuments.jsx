import { Card, CardBody } from "@material-tailwind/react";
import ComingSoon from "../../components/ComingSoon";
import Heading from "../../components/Heading";

const FamilyCourtRequiredDocuments = () => {
  const heading = "Family Court Required Documents Forms";

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="family-court-required-documents-heading"
    >
      <Heading heading={heading} id="family-court-required-documents-heading" />
      <CardBody
        className="flex items-center justify-center h-full"
        role="document"
      >
        <ComingSoon aria-live="polite" />
      </CardBody>
    </Card>
  );
};

export default FamilyCourtRequiredDocuments;
