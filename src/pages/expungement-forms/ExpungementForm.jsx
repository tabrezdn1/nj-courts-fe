import { Card, CardBody } from "@material-tailwind/react";
import { tabItems } from "../../data/configs";
import Heading from "../../components/Heading";
import TabsRenderer from "../../components/TabsRenderer";
const ExpungementForm = () => {
  const heading = "Expungement Form";
  const FormId = "expungement_form";

  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <TabsRenderer id={FormId} tabItems={tabItems} />
        </CardBody>
      </Card>
    </>
  );
};

export default ExpungementForm;
