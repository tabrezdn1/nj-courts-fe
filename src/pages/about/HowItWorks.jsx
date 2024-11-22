import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import {
  DocumentTextIcon,
  MagnifyingGlassCircleIcon,
  ArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import CustomTypography from "../../components/CustomTypography";
import { howItWorks } from "../../data/configs";

const HowItWorks = () => {
  const {
    heading,
    introductionText,
    findFormPoints,
    fillFormPoints,
    submitFormPoints,
    saveTimeText,
  } = howItWorks;

  // Map icon names to imported components
  const iconMapping = {
    DocumentTextIcon: DocumentTextIcon,
    MagnifyingGlassCircleIcon: MagnifyingGlassCircleIcon,
    ArrowUpIcon: ArrowUpIcon,
    InformationCircleIcon: InformationCircleIcon,
  };

  // Convert string icon references to actual icon components
  const convertIconPoints = (points) =>
    points.map((point) => ({
      ...point,
      steps: point.steps.map((step) => ({
        ...step,
        icon: iconMapping[step.icon],
      })),
    }));

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto pt-16 sm:pt-16" shadow={false}>
      <Heading heading={heading} className="" />
      <CardBody className="w-full font-normal px-5 sm:px-[64px]">
        <section className="mb-8 sm:mb-16">
          <CustomTypography variant="heading">Introduction</CustomTypography>
          <CustomTypography variant="paragraph" className="text-sm sm:text-base">
            {introductionText}
          </CustomTypography>
        </section>

        <section className="mb-8 sm:mb-16">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Find the Form You Need
          </CustomTypography>
          <CustomTypography variant="paragraph" className="text-sm sm:text-base mb-4">
            The first step to getting started is identifying the right form for
            your legal matter. You can easily:
          </CustomTypography>
          <PointsList listPoints={convertIconPoints(findFormPoints)} />
        </section>

        <section className="mb-8 sm:mb-16">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Fill Out the Form with Step-by-Step Guidance
          </CustomTypography>
          <CustomTypography variant="paragraph" className="text-sm sm:text-base mb-4">
            Once you’ve found the right form, our platform offers
            easy-to-understand, step-by-step instructions to ensure you fill it
            out correctly. We make sure to:
          </CustomTypography>
          <PointsList listPoints={convertIconPoints(fillFormPoints)} />
        </section>

        <section className="mb-8 sm:mb-16">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Submit Your Form
          </CustomTypography>
          <CustomTypography variant="paragraph" className="text-sm sm:text-base mb-4">
            After completing your form, you can:
          </CustomTypography>
          <PointsList listPoints={convertIconPoints(submitFormPoints)} />
        </section>

        <section className="mb-8 sm:mb-16">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Save Time and Reduce Errors
          </CustomTypography>
          {saveTimeText.map((text, index) => (
            <CustomTypography key={index} variant="paragraph" className="text-sm sm:text-base mt-4">
              {text}
            </CustomTypography>
          ))}
        </section>
      </CardBody>
    </Card>
  );
};

export default HowItWorks;
