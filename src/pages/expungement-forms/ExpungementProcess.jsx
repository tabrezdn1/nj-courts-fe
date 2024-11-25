import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import PointsList from "../../components/PointsList";
import { expungementProcess } from "../../data/configs";

const EligibilityCriteria = () => {
  const { heading, introductionText, steps } = expungementProcess;

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="font-normal px-8">
        <section className="mb-16">
          <CustomTypography variant="paragraph">
            {introductionText}
          </CustomTypography>
        </section>

        {steps.map((step, index) => (
          <section key={index} className="mb-16">
            <CustomTypography variant="heading">
              {step.title}
            </CustomTypography>
            <CustomTypography variant="paragraph">
              {step.description}
            </CustomTypography>
            {step.listPoints && <PointsList listPoints={step.listPoints} />}
          </section>
        ))}
      </CardBody>
    </Card>
  );
};

export default EligibilityCriteria;
