import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import ServiceSection from "../../components/ServiceSection";
import { GlobeAltIcon, ShareIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid'; // Correct v2 import

const OurMission = () => {
  const missionHeading = "Our Mission";

  const missionText =
    "At the New Jersey Courts Online Forms Portal, our mission is to create a seamless, accessible, and secure digital experience for residents navigating legal procedures. We aim to simplify the legal process by providing easy access to the official court forms needed for various legal issues, including civil, criminal, family, and expungement matters.";

  const platformText = "Our platform is designed to empower individuals by offering:";

  // Service section content (updated to match the bullet points in the document)
  const services = [
    {
      title: "Simplicity",
      description:
        "We believe that every New Jersey resident should be able to navigate legal processes without confusion. By offering a user-friendly portal with step-by-step instructions, we make sure that legal forms can be completed accurately and efficiently.",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Accessibility",
      description:
        "We are committed to providing equitable access to all residents, regardless of background or technical skills. Our platform is accessible from any device, allowing users to complete legal forms from home, work, or anywhere else.",
      icon: ShareIcon,
    },
    {
      title: "Efficiency",
      description:
        "Time is critical in legal matters, and we aim to streamline the process to save you time. By providing secure, online form submission options and real-time tracking, we reduce the need for multiple court visits, making the process more efficient for both residents and the court system.",
      icon: GlobeAltIcon,
    },
  ];

  const closingText =
    "At the heart of our mission is a desire to modernize the way New Jersey residents interact with the court system. By leveraging technology, we strive to make the legal filing process straightforward, transparent, and accessible for all.";

  const startText =
    "Start exploring the portal today, and let us guide you through your legal filing needs with clarity and confidence.";

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={missionHeading} />
      <CardBody className="font-normal px-[64px]">
        {/* Mission statement */}
        <CustomTypography variant="paragraph">
          {missionText}
        </CustomTypography>
        {/* Service Section added dynamically */}
        <ServiceSection
          heading={platformText}
          services={services}
          buttonText="Learn More"
        />

        {/* Closing Text section */}
        <section className="mb-16">
          <CustomTypography variant="paragraph">
            {closingText}
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            {startText}
          </CustomTypography>
        </section>
      </CardBody>
    </Card>
  );
};

export default OurMission;
