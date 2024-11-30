import { Card, CardBody } from "@material-tailwind/react";
import { tabItems } from "../../data/configs";
import Heading from "../../components/Heading";
import TabsRenderer from "../../components/TabsRenderer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ExpungementForm = () => {
  const heading = "Expungement Form";
  const FormId = "expungement_form";
  const { mode } = useParams();
  const navigate = useNavigate();
  const [isModeChecked, setIsModeChecked] = useState(false);

  useEffect(() => {
    if (mode === "new") {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.indexOf(FormId) > -1) {
          localStorage.removeItem(key);
        }
      });
      navigate(`/expungement-forms/form/continue`);
    }
    setIsModeChecked(true);
  }, []);
  return (
    <Card className="w-full overflow-y-auto mt-16 md:mt-0" shadow={false}>
      <Heading heading={heading} />
      <CardBody className="mx-0 md:p-6 font-normal md:px-[16px] md:mt-[16px] md:px-[64px] w-screen md:w-full">
        {
          isModeChecked && (
            <TabsRenderer id={FormId} formConfig={tabItems} />
          )
        }
      </CardBody>
    </Card>
  );
};

export default ExpungementForm;
