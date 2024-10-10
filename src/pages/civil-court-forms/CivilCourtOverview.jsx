import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";

const CivilCourtOverview = () => {
  const heading = "Civil Court Overview";
  const listPoints = [
    {
      title: "Contract Disagreements",
      description: "",
    },
    {
      title: "Property Disputes",
      description:
        "",
    },
    {
      title: "Personal Injury Claims",
      description:
        "",
    },
  ];
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
          Civil courts handle non-criminal disputes between individuals or organizations, such as:
          </Typography>
          <PointsList listPoints={listPoints} />
        </CardBody>
      </Card>
    </>
  );
};

export default CivilCourtOverview;
