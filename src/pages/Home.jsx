import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../components/Heading";
import PointsList from "../components/PointsList";
import HorizontalCard from "../components/HorizontalCard";
import CustomTypography from "../components/CustomTypography";

const Home = () => {
  const heading = "Welcome to the New Jersey Court";
  const introductionText =
    "Welcome to the New Jersey Courts Online Forms Portal, your trusted platform for accessing and submitting official court forms in New Jersey. We aim to make legal processes more transparent and accessible, providing a secure, user-friendly interface for all your legal form needs. Whether you are navigating civil, criminal, family, or expungement-related cases, our portal is designed to help you complete and submit the necessary paperwork with ease.";
  const missionText =
    "Our mission is to empower New Jersey residents by simplifying the legal filing process. We offer easy-to-follow instructions, an extensive range of forms, and reliable resources to guide you every step of the way. No matter the complexity of your legal issue, we ensure that the filing process is as straightforward and efficient as possible.";

  const whyChoosePoints = [
    {
      title: "Comprehensive Access",
      description:
        "Our portal offers access to a wide variety of forms covering expungements, civil lawsuits, criminal cases, and family court matters.",
    },
    {
      title: "Step-by-Step Guidance",
      description:
        "Each form includes detailed instructions to ensure accuracy. We guide you through each field, explaining legal terms and what information you need to provide.",
    },
    {
      title: "Secure and Confidential",
      description:
        "We take your privacy seriously. Your data is encrypted and protected by state-of-the-art security measures, so you can rest assured that your personal information is safe.",
    },
    {
      title: "Save Time",
      description:
        "Avoid unnecessary trips to the courthouse by completing and submitting your forms online from the convenience of your home or office.",
    },
    {
      title: "Accessible to All",
      description:
        "Whether you’re a legal professional or handling a personal matter, our platform is designed for users of all experience levels. The portal is intuitive and offers support for those unfamiliar with legal forms.",
    },
  ];

  const essentialForms = [
    {
      category: "Legal Forms",
      title: "Expungement Forms",
      description:
        "Begin the process of clearing your criminal record. Our step-by-step instructions guide you through each form required for expungement, including the Petition for Expungement (Form A) and related documents.",
      link: "/expungement-forms",
      buttonText: "View Expungement Forms",
    },
    {
      category: "Legal Forms",
      title: "Civil Court Forms",
      description:
        "Manage civil matters efficiently. Whether you need forms for small claims, landlord-tenant disputes, or other civil actions, we provide all the necessary documents and guidance.",
      link: "/civil-court-forms",
      buttonText: "View Civil Court Forms",
    },
    {
      category: "Legal Forms",
      title: "Family Court Forms",
      description:
        "Navigate family-related legal issues, including divorce, child custody, child support, and adoption. Access commonly requested forms and ensure you meet the court's requirements.",
      link: "/family-court-forms",
      buttonText: "View Family Court Forms",
    },
    {
      category: "Legal Forms",
      title: "Criminal Court Forms",
      description:
        "If you’re involved in a criminal case, our portal provides forms for motions, appeals, and other necessary documentation.",
      link: "/criminal-court-forms",
      buttonText: "View Criminal Court Forms",
    },
  ];

  const keyFeaturesPoints = [
    {
      title: "Browse by Category",
      description:
        "Easily navigate our categories of forms, including Expungement, Civil, Family, and Criminal Court forms. Each section provides specific instructions and form types to ensure you have the correct documentation.",
    },
    {
      title: "Search Functionality",
      description:
        "Use our powerful search tool to quickly find the exact form you need. Whether you know the form number or just have a general idea of what you’re looking for, our search tool ensures you can find it quickly.",
    },
    {
      title: "Progress Tracking",
      description:
        "Track your form submissions in real time. Once your form is submitted, you will receive updates on its status, so you always know where you stand in the process.",
    },
    {
      title: "Save and Resume",
      description:
        "If you need more time to complete a form, our platform allows you to save your progress and return to it later. Simply log in, pick up where you left off, and finish at your own pace.",
    },
  ];

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="font-normal px-[64px]">
        <section className="mb-16">
          <CustomTypography variant="paragraph">
            {introductionText}
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            {missionText}
          </CustomTypography>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Why Choose the NJ Courts Online Forms Portal?
          </CustomTypography>
          <PointsList listPoints={whyChoosePoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Quick Access to Essential Forms
          </CustomTypography>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {essentialForms.map((form, index) => (
              <HorizontalCard key={index} content={form} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">Key Features</CustomTypography>
          <PointsList listPoints={keyFeaturesPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">How It Works</CustomTypography>
          <PointsList
            listPoints={[
              {
                title: "Find the Form You Need",
                description:
                  "Start by browsing our categories or using the search function to locate the appropriate form for your legal issue.",
              },
              {
                title: "Fill Out the Form",
                description:
                  "Each form comes with instructions to guide you through the process. Our system provides helpful tips to ensure accuracy and minimize mistakes.",
              },
              {
                title: "Save, Submit, or Print",
                description:
                  "When you’re ready, submit your form electronically (where supported) or print it out for submission to the court. Some forms may require additional documentation, which will be outlined in the instructions.",
              },
              {
                title: "Track Your Submission",
                description:
                  "Stay updated on the status of your form through your account dashboard. Notifications will keep you informed if additional steps are required or when your form has been successfully processed.",
              },
            ]}
          />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">Start Now</CustomTypography>
          <CustomTypography variant="paragraph">
            No matter the legal issue, the New Jersey Courts Online Forms Portal
            is here to assist you. Explore the platform, find the forms you
            need, and submit your documents securely and efficiently. Our
            platform is designed to save you time, provide clarity, and ensure
            your legal filings are done right the first time.
          </CustomTypography>
        </section>
      </CardBody>
    </Card>
  );
};

export default Home;
