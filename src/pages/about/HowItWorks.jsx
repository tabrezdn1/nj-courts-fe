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

const HowItWorks = () => {
  const heading = "How it Works?";
  const introductionText =
    "The New Jersey Courts Online Forms Portal simplifies the legal filing process, ensuring that anyone can access, fill out, and submit the necessary forms with ease. Our platform is designed to provide you with the guidance you need every step of the way, whether you're submitting forms for civil cases, family matters, criminal filings, or expungement processes.";

  const findFormPoints = [
    {
      title: "Browse by Category",
      steps: [
        {
          icon: MagnifyingGlassCircleIcon,
          text: "Browse by Category to find forms relevant to your situation.",
          link: "/browse-category",
          linkText: "Browse forms",
        },
      ],
    },
    {
      title: "Use the Search Bar",
      steps: [
        {
          icon: DocumentTextIcon,
          text: "Use the Search Bar for quick access to the form you need.",
          link: "/search-form",
          linkText: "Search now",
        },
      ],
    },
  ];

  const fillFormPoints = [
    {
      title: "Provide Helpful Tooltips",

      steps: [
        {
          icon: InformationCircleIcon,
          text: "Understand legal terms with helpful tooltips.",
          link: "/tooltips",
          linkText: "Learn more",
        },
      ],
    },
    {
      title: "Break Down Complex Sections",

      steps: [
        {
          icon: ArrowUpIcon,
          text: "Complex sections are broken down into steps.",
          link: "/complex-sections",
          linkText: "See details",
        },
      ],
    },
    {
      title: "Auto-Save Your Progress",

      steps: [
        {
          icon: ArrowUpIcon,
          text: "Your progress is automatically saved as you go.",
          link: "/auto-save",
          linkText: "Learn more",
        },
      ],
    },
  ];

  const submitFormPoints = [
    {
      title: "Submit Electronically",

      steps: [
        {
          icon: ArrowUpIcon,
          text: "Submit forms online if eligible.",
          link: "/submit-electronically",
          linkText: "Submit online",
        },
      ],
    },
    {
      title: "Print and Submit in Person",
      steps: [
        {
          icon: DocumentTextIcon,
          text: "Print and submit at the court if online submission is unavailable.",
          link: "/print-submit",
          linkText: "Print form",
        },
      ],
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

        <section className="mb-16">
          <CustomTypography variant="heading">
            Find the Form You Need
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mb-4">
            The first step to getting started is identifying the right form for
            your legal matter. You can easily:
          </CustomTypography>
          <PointsList listPoints={findFormPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Fill Out the Form with Step-by-Step Guidance
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mb-4">
            Once you’ve found the right form, our platform offers
            easy-to-understand, step-by-step instructions to ensure you fill it
            out correctly. We make sure to:
          </CustomTypography>
          <PointsList listPoints={fillFormPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Submit Your Form
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mb-4">
            After completing your form, you can:
          </CustomTypography>
          <PointsList listPoints={submitFormPoints} />
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
