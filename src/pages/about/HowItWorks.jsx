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
    <Card className="w-full overflow-y-auto mt-16 md:mt-0" shadow={false}>
      <Heading heading={heading} />
      <CardBody className="w-full font-normal px-5 sm:px-[64px]">
        <section className="p-1">
          <CustomTypography variant="heading">Introduction</CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base"
          >
            {introductionText}
          </CustomTypography>
        </section>

        <section className="p-1">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Find the Form You Need
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base"
          >
            The first step to getting started is identifying the right form for
            your legal matter. You can easily:
          </CustomTypography>
          <PointsList
            listPoints={convertIconPoints(findFormPoints, "findFormPoints")}
          />
        </section>

        <section className="p-1">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Fill Out the Form with Step-by-Step Guidance
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base"
          >
            Once you’ve found the right form, our platform offers
            easy-to-understand, step-by-step instructions to ensure you fill it
            out correctly. We make sure to:
          </CustomTypography>
          <PointsList
            listPoints={convertIconPoints(fillFormPoints, "fillFormPoints")}
          />
        </section>

        <section className="p-1">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Submit Your Form
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base"
          >
            After completing your form, you can:
          </CustomTypography>
          <PointsList
            listPoints={convertIconPoints(submitFormPoints, "submitFormPoints")}
          />
        </section>

        <section className="p-1">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            Save Time and Reduce Errors
          </CustomTypography>
          {saveTimeText.map((text, index) => (
            <CustomTypography
              key={index}
              variant="paragraph"
              className="text-sm sm:text-base"
            >
              {text}
            </CustomTypography>
          ))}
        </section>
      </CardBody>
    </Card>
  );
};

export default HowItWorks;
