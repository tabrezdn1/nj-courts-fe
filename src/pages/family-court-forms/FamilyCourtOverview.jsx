import { Card, CardBody } from "@material-tailwind/react";
import ComingSoon from "../../components/ComingSoon";
import Heading from "../../components/Heading";

const FamilyCourtOverview = () => {
  const heading = "Civil Court Common Forms";

  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="flex items-center justify-center h-full">
          <ComingSoon />
        </CardBody>
      </Card>
    </>
  );
};

export default FamilyCourtOverview;
