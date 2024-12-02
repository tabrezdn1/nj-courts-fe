import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import PointsList from "../../components/PointsList";
import { expungementProcess } from "../../data/configs";

const EligibilityCriteria = () => {
  const { heading, introductionText, steps } = expungementProcess;

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="eligibility-criteria-heading"
    >
      <Heading heading={heading} id="eligibility-criteria-heading" />
      <CardBody className="font-normal px-8" role="document">
        <section className="mb-16" aria-labelledby="introduction-section">
          <CustomTypography variant="paragraph" id="introduction-section">
            {introductionText}
          </CustomTypography>
        </section>

        {steps.map((step, index) => (
          <section
            key={index}
            className="mb-16"
            aria-labelledby={`step-${index}-heading`}
          >
            <CustomTypography variant="heading" id={`step-${index}-heading`}>
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
