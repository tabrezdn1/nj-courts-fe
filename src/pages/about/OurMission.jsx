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

const iconMap = {
  ClipboardDocumentListIcon: ClipboardDocumentListIcon,
  ShareIcon: ShareIcon,
  GlobeAltIcon: GlobeAltIcon,
};

const OurMission = () => {
  const {
    heading,
    missionText,
    platformText,
    services,
    closingText,
    startText,
  } = missionData;

  // Map icons from string names to the actual components
  const servicesWithIcons = services.map((service) => ({
    ...service,
    icon: iconMap[service.icon],
  }));

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="our-mission-heading"
    >
      <Heading heading={heading} id="our-mission-heading" />
      <CardBody className="font-normal px-5">
        <CustomTypography variant="paragraph" aria-describedby="mission-text">
          {missionText}
        </CustomTypography>

        <ServiceSection
          heading={platformText}
          services={servicesWithIcons}
          aria-labelledby="platform-services-heading"
        />

        <section className="mb-16" aria-labelledby="closing-section-heading">
          <CustomTypography variant="paragraph" id="closing-section-heading">
            {closingText}
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="mt-4"
            aria-label="start-text"
          >
            {startText}
          </CustomTypography>
        </section>
      </CardBody>
    </Card>
  );
};

export default OurMission;
