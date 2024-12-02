import { Card, CardBody } from "@material-tailwind/react";
import ComingSoon from "../../components/ComingSoon";
import Heading from "../../components/Heading";

const CivilCourtOverview = () => {
  const heading = "Civil Court Overview";

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="civil-court-overview-heading"
    >
      <Heading heading={heading} id="civil-court-overview-heading" />
      <CardBody
        className="flex items-center justify-center h-full"
        role="alert"
      >
        <ComingSoon />
      </CardBody>
    </Card>
  );
};

export default CivilCourtOverview;
