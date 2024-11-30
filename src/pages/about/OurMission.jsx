import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import ServiceSection from "../../components/ServiceSection";
import {
  GlobeAltIcon,
  ShareIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import { missionData } from "../../data/configs";
import { useTranslation } from "react-i18next";

const iconMap = {
  ClipboardDocumentListIcon: ClipboardDocumentListIcon,
  ShareIcon: ShareIcon,
  GlobeAltIcon: GlobeAltIcon,
};

const OurMission = () => {
  const { t } = useTranslation();
  const { services } = missionData;

  // Map icons from string names to the actual components
  const servicesWithIcons = services.map((service, index) => ({
    ...service,
    title: t(`mission.services.${index}.title`),
    description: t(`mission.services.${index}.description`),
    icon: iconMap[service.icon],
  }));

  return (
    <Card className="w-full overflow-y-auto mt-16 md:mt-0" shadow={false}>
      <Heading heading={t(`mission.heading`)} />
      <CardBody className="font-normal px-5">
        <CustomTypography variant="paragraph">
          {t(`mission.missionText`)}
        </CustomTypography>

        <ServiceSection
          heading={t(`mission.platformText`)}
          services={servicesWithIcons}
          buttonText={t(`mission.buttonText`)}
        />

        <section className="mb-16">
          <CustomTypography variant="paragraph">
            {t(`mission.closingText`)}
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            {t(`mission.startText`)}
          </CustomTypography>
        </section>
      </CardBody>
    </Card>
  );
};

export default OurMission;
