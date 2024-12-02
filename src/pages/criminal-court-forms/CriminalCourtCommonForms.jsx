import { Card, CardBody } from "@material-tailwind/react";
import ComingSoon from "../../components/ComingSoon";
import Heading from "../../components/Heading";

const CriminalCourtCommonForms = () => {
  const heading = "Criminal Court Common Forms";

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="criminal-court-common-forms-heading"
    >
      <Heading heading={heading} id="criminal-court-common-forms-heading" />
      <CardBody
        className="flex items-center justify-center h-full"
        role="alert"
      >
        <ComingSoon />
      </CardBody>
    </Card>
  );
};

export default CriminalCourtCommonForms;
