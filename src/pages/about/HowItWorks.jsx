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
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  const { findFormPoints, fillFormPoints, submitFormPoints, saveTimeText } =
    howItWorks;

  // Map icon names to imported components
  const iconMapping = {
    DocumentTextIcon: DocumentTextIcon,
    MagnifyingGlassCircleIcon: MagnifyingGlassCircleIcon,
    ArrowUpIcon: ArrowUpIcon,
    InformationCircleIcon: InformationCircleIcon,
  };

  // Convert string icon references to actual icon components
  const convertIconPoints = (points, pointsKey) =>
    points.map((point, pointIndex) => ({
      ...point,
      title: t(`howItWorks.${pointsKey}.${pointIndex}.title`),
      steps: point.steps.map((step, stepIndex) => ({
        ...step,
        text: t(
          `howItWorks.${pointsKey}.${pointIndex}.steps.${stepIndex}.text`
        ),
        linkText: t(
          `howItWorks.${pointsKey}.${pointIndex}.steps.${stepIndex}.linkText`
        ),
        icon: iconMapping[step.icon],
      })),
    }));

  return (
    <Card className="w-full overflow-y-auto mt-16 md:mt-0" shadow={false}>
      <Heading heading={t(`howItWorks.heading`)} />
      <CardBody className="w-full font-normal px-5 sm:px-[64px]">
        <section className="mb-4 sm:mb-11">
          <CustomTypography variant="heading">
            {t(`howItWorks.intro`)}
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base"
          >
            {t(`howItWorks.introductionText`)}
          </CustomTypography>
        </section>

        <section className="mb-2 sm:mb-11">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            {t(`howItWorks.findForm.intro`)}
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base mb-4"
          >
            {t(`howItWorks.findForm.subIntro`)}
          </CustomTypography>
          <PointsList
            listPoints={convertIconPoints(findFormPoints, "findFormPoints")}
          />
        </section>

        <section className="mb-2 sm:mb-11">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            {t(`howItWorks.fillForm.intro`)}
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base mb-4"
          >
            {t(`howItWorks.fillForm.subIntro`)}
          </CustomTypography>
          <PointsList
            listPoints={convertIconPoints(fillFormPoints, "fillFormPoints")}
          />
        </section>

        <section className="mb-2 sm:mb-11">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            {t(`howItWorks.submitForm.intro`)}
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="text-sm sm:text-base mb-4"
          >
            {t(`howItWorks.submitForm.subIntro`)}
          </CustomTypography>
          <PointsList
            listPoints={convertIconPoints(submitFormPoints, "submitFormPoints")}
          />
        </section>

        <section className="mb-2 sm:mb-11">
          <CustomTypography variant="heading" className="text-lg sm:text-xl">
            {t(`howItWorks.saveTimeTextLabel`)}
          </CustomTypography>
          {saveTimeText.map((text, index) => (
            <CustomTypography
              key={index}
              variant="paragraph"
              className="text-sm sm:text-base mt-4"
            >
              {t(`howItWorks.saveTimeText.${index}`)}
            </CustomTypography>
          ))}
        </section>
      </CardBody>
    </Card>
  );
};

export default HowItWorks;
