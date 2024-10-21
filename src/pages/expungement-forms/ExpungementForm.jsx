import { Card, CardBody } from "@material-tailwind/react";
import { tabItems } from "../../data/configs";
import Heading from "../../components/Heading";
import useFormData from "../../hooks/useFormData";
import TabsRenderer from "../../components/TabsRenderer";


const ExpungementForm = () => {
  const heading = "ONLINE FORM";
  const { formData, updateField, updateActiveTabLocalStorage, updateActiveStepLocalStorage } = useFormData("expungementForm");

  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <TabsRenderer 
            tabItems={tabItems} 
            formData={formData} 
            updateField={updateField} 
            updateActiveTabLocalStorage={updateActiveTabLocalStorage} 
            updateActiveStepLocalStorage={updateActiveStepLocalStorage}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default ExpungementForm;
