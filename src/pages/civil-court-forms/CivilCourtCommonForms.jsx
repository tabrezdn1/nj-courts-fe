import { Card, CardBody } from "@material-tailwind/react";
import ComingSoon from "../../components/ComingSoon";
import Heading from "../../components/Heading";

const CivilCourtCommonForms = () => {
  const heading = "Civil Court Common Forms";

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="civil-court-common-forms-heading"
    >
      <Heading heading={heading} id="civil-court-common-forms-heading" />
      <CardBody
        className="flex items-center justify-center h-full"
        role="alert"
      >
        <ComingSoon />
      </CardBody>
    </Card>
  );
};

export default CivilCourtCommonForms;
