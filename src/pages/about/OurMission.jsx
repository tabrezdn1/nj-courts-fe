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
  const { heading, missionText, platformText, services, closingText, startText } = missionData;

  // Map icons from string names to the actual components
  const servicesWithIcons = services.map((service) => ({
    ...service,
    icon: iconMap[service.icon],
  }));

  return (
    <Card className="w-full mt-16 sm:mt-0" shadow={false}>
      <Heading heading={heading} />
      <CardBody className="font-normal px-5">
        <CustomTypography variant="paragraph">{missionText}</CustomTypography>

        <ServiceSection
          heading={platformText}
          services={servicesWithIcons}
          buttonText="Learn More"
        />

        <section className="mb-16">
          <CustomTypography variant="paragraph">{closingText}</CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            {startText}
          </CustomTypography>
        </section>
      </CardBody>
    </Card>
  );
};

export default OurMission;
