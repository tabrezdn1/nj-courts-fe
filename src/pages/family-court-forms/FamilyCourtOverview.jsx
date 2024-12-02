import { Card, CardBody } from "@material-tailwind/react";
import ComingSoon from "../../components/ComingSoon";
import Heading from "../../components/Heading";

const FamilyCourtOverview = () => {
  const heading = "Family Court Overview";

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="family-court-overview-heading"
    >
      <Heading heading={heading} id="family-court-overview-heading" />
      <CardBody
        className="flex items-center justify-center h-full"
        role="document"
      >
        <ComingSoon aria-live="polite" />
      </CardBody>
    </Card>
  );
};

export default FamilyCourtOverview;
