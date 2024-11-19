import { Card, CardBody } from "@material-tailwind/react";
import { tabItems } from "../../data/configs";
import Heading from "../../components/Heading";
import TabsRenderer from "../../components/TabsRenderer";

const ExpungementForm = () => {
  const heading = "Expungement Form";
  const FormId = "expungement_form";

  return (
    <Card shadow={false} className="w-full h-[calc(100vh-2rem)] overflow-y-auto pt-[70px] md:pt-[0px] ">
        <Heading heading={heading} className="" />
        <CardBody className="p-5 md:p-6 font-normal md:px-[16px] md:mt-[16px] md:px-[64px] w-screen md:w-full">
          <TabsRenderer id={FormId} formConfig={tabItems} />
        </CardBody>
    </Card>
  );
};

export default ExpungementForm;
