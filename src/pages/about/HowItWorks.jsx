import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import Instructions from "../../components/Instructions"; // Import Instructions
import {
  DocumentTextIcon,
  MagnifyingGlassCircleIcon,
  ArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import CustomTypography from "../../components/CustomTypography";

const HowItWorks = () => {
  const heading = "How it Works?";
  const introductionText =
    "The New Jersey Courts Online Forms Portal simplifies the legal filing process, ensuring that anyone can access, fill out, and submit the necessary forms with ease. Our platform is designed to provide you with the guidance you need every step of the way, whether you're submitting forms for civil cases, family matters, criminal filings, or expungement processes.";

  const stepsTitle = "Find the Form You Need";
  const stepsDescription =
    "The first step to getting started is identifying the right form for your legal matter. You can easily:";

  // Step data with text, link, and icon
  const steps = [
    {
      icon: MagnifyingGlassCircleIcon,
      text: "Browse by Category to find forms relevant to your situation.",
      link: "/browse-category",
      linkText: "Browse forms",
    },
    {
      icon: DocumentTextIcon,
      text: "Use the Search Bar for quick access to the form you need.",
      link: "/search-form",
      linkText: "Search now",
    },
  ];

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="font-normal px-[64px]">
        <section className="mb-16">
          <CustomTypography variant="heading">Introduction</CustomTypography>
          <CustomTypography variant="paragraph">
            {introductionText}
          </CustomTypography>
        </section>

        {/* Section with Title, Description, and Instructions */}
        <section className="mb-16">
          <CustomTypography variant="heading">{stepsTitle}</CustomTypography>
          <CustomTypography variant="paragraph" className="mb-4">
            {stepsDescription}
          </CustomTypography>
          <Instructions steps={steps} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Save Time and Reduce Errors
          </CustomTypography>
          <CustomTypography variant="paragraph">
            With our streamlined approach, you no longer need to worry about
            missing deadlines or making common filing mistakes. By offering
            detailed instructions and automatic reminders, we ensure that your
            forms are accurate and submitted on time.
          </CustomTypography>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">Get Started</CustomTypography>
          <CustomTypography variant="paragraph">
            Start by choosing a category or searching for your form today, and
            let the New Jersey Courts Online Forms Portal guide you through your
            legal filing process efficiently and securely.
          </CustomTypography>
        </section>
      </CardBody>
    </Card>
  );
};

export default HowItWorks;
