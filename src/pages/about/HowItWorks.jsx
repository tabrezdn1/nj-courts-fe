import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import {
  DocumentTextIcon,
  MagnifyingGlassCircleIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import CustomTypography from "../../components/CustomTypography";

const HowItWorks = () => {
  const heading = "How it Works?";
  const introductionText =
    "The New Jersey Courts Online Forms Portal simplifies the legal filing process, ensuring that anyone can access, fill out, and submit the necessary forms with ease. Our platform is designed to provide you with the guidance you need every step of the way, whether you're submitting forms for civil cases, family matters, criminal filings, or expungement processes";

  const listPointsFindForm = [
    {
      title: "Browse by Category",
      description:
        "Our portal organizes forms into clear categories such as Expungement, Civil, Family, and Criminal. This allows you to quickly find the forms relevant to your situation.",
    },
    {
      title: "Use the Search Bar",
      description:
        "If you know the name or number of the form you need, simply enter it into the search bar for quick access. The search feature helps you find forms based on keywords or topics related to your case.",
    },
  ];

  const listPointsFillForm = [
    {
      title: "Provide Helpful Tooltips",
      description:
        "Some forms come with legal jargon or specific requirements. Our tooltips explain these terms, helping you to understand exactly what information is needed.",
    },
    {
      title: "Break Down Complex Sections",
      description:
        "For longer or more complicated forms, we break sections down into manageable steps so you never feel overwhelmed.",
    },
    {
      title: "Auto-Save Your Progress",
      description:
        "Don’t worry if you need to take a break or gather additional information. Our auto-save feature ensures you won’t lose your progress and can return later to complete the form.",
    },
  ];

  const listPointsSubmitForm = [
    {
      title: "Submit Electronically",
      description:
        "Some forms are eligible for electronic submission. Our platform will notify you if the form you're completing can be submitted online, allowing you to file directly without having to visit the courthouse.",
    },
    {
      title: "Print and Submit in Person",
      description:
        "If electronic filing is not available, you can print your completed form and submit it at the appropriate court. Our instructions will provide details on where and how to submit the printed form.",
    },
  ];

  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <section className="mb-16">
            <CustomTypography variant="heading">Introduction</CustomTypography>
            <CustomTypography variant="paragraph">
              {introductionText}
            </CustomTypography>
          </section>

          <section className="mb-16 flex items-start gap-8">
            <MagnifyingGlassCircleIcon className="text-gray-700 h-10 w-10" />
            <div>
              <CustomTypography variant="heading">
                Find the Form You Need
              </CustomTypography>
              <CustomTypography variant="paragraph">
                The first step to getting started is identifying the right form
                for your legal matter. You can easily browse by category or use
                the search bar for quick access to find the form relevant to
                your case.
              </CustomTypography>
              <PointsList listPoints={listPointsFindForm} />
            </div>
          </section>

          <section className="mb-16 flex items-start gap-8">
            <DocumentTextIcon className="text-gray-700 h-10 w-10" />
            <div>
              <CustomTypography variant="heading">
                Fill Out the Form with Guidance
              </CustomTypography>
              <CustomTypography variant="paragraph">
                Once you’ve found the right form, our platform offers
                easy-to-understand step-by-step instructions to ensure you fill
                it out correctly. We make sure to:
              </CustomTypography>
              <PointsList listPoints={listPointsFillForm} />
            </div>
          </section>

          <section className="mb-16 flex items-start gap-8">
            <ArrowUpIcon className="text-gray-700 h-10 w-10" />
            <div>
              <CustomTypography variant="heading">
                Submit Your Form
              </CustomTypography>
              <CustomTypography variant="paragraph">
                After completing your form, you can either submit it
                electronically if eligible or print it for in-person submission
                at the appropriate court. Our platform guides you through every
                step of this process to make filing as simple as possible:
              </CustomTypography>
              <PointsList listPoints={listPointsSubmitForm} />
            </div>
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
              let the New Jersey Courts Online Forms Portal guide you through
              your legal filing process efficiently and securely.
            </CustomTypography>
          </section>
        </CardBody>
      </Card>
    </>
  );
};

export default HowItWorks;
