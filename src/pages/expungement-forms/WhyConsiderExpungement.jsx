import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import PointsList from "../../components/PointsList";
import CardWithLink from "../../components/CardWithLink";

const WhyConsiderExpungement = () => {
  const heading = "Why Consider Expungement?";
  const introductionText =
    "Expungement offers individuals a valuable second chance by allowing them to seal or erase certain criminal records from public view. For those who have served their sentence and fulfilled legal obligations, expungement provides an opportunity to move forward without the ongoing burden of a criminal record affecting daily life. Here are the primary reasons why you should consider seeking expungement:";

  const employmentOpportunitiesPoints = [
    {
      title: "Better Job Prospects",
      description:
        "Expunged records do not show up on most background checks conducted by private employers, giving you the freedom to pursue a wider range of career options.",
    },
    {
      title: "Professional Licensing",
      description:
        "Some professional boards and licensing agencies might still see expunged records, but many will consider the fact that your record has been cleared when making decisions about licensure.",
    },
  ];

  const personalAndProfessionalPoints = [
    {
      title: "Rebuilding Trust",
      description:
        "Without a criminal record to follow you, it’s easier to rebuild and maintain positive personal relationships. Family and friends may feel more comfortable knowing that you’ve taken steps to clear your name.",
    },
    {
      title: "Professional Advancement",
      description:
        "If you’re looking to advance in your career, expungement removes the barriers that a criminal record may have placed on your ability to grow professionally.",
    },
  ];

  const peaceOfMindPoints = [
    {
      title: "Fresh Start",
      description:
        "With an expunged record, you no longer have to explain your criminal history during interviews, housing applications, or other important aspects of life.",
    },
    {
      title: "Mental and Emotional Relief",
      description:
        "Expungement offers closure and the ability to move forward confidently, knowing that you’ve taken the legal steps to clear your record.",
    },
  ];

  const additionalResourcesCards = [
    {
      title: "Start Your Expungement Process Here",
      description:
        "Begin the process by filing a Petition for Expungement (Form A) with the court.",
      link: "/online-form",
      buttonText: "Route to ONLINE FORM page",
    },
    {
      title: "Expungement Resources",
      description:
        "Visit our Expungement Resources page to learn more about the benefits, eligibility requirements, and steps involved in clearing your record.",
      link: "/resources/expungement",
      buttonText: "Learn More",
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
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            1. Improved Employment Opportunities
          </CustomTypography>
          <PointsList listPoints={employmentOpportunitiesPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            2. Access to Housing and Financial Services
          </CustomTypography>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            3. Enhanced Personal and Professional Relationships
          </CustomTypography>
          <PointsList listPoints={personalAndProfessionalPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            4. Educational Opportunities and Personal Growth
          </CustomTypography>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            5. Restoration of Rights
          </CustomTypography>
          <CustomTypography variant="paragraph">
            In certain cases, expungement can lead to the restoration of rights
            that were lost due to a criminal conviction. These rights might
            include the ability to vote, serve on a jury, or own a firearm,
            depending on the nature of the conviction and state laws.
          </CustomTypography>
          <CustomTypography variant="heading" className="mt-4">
            Restoring Civil Rights
          </CustomTypography>
          <CustomTypography variant="paragraph">
            For some, expungement can result in the restoration of civil rights,
            helping you fully reintegrate into society without the limitations
            of a criminal record.
          </CustomTypography>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            6. Peace of Mind and Closure
          </CustomTypography>
          <PointsList listPoints={peaceOfMindPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            How to Begin the Expungement Process
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            If you are eligible for expungement, you can begin the process by
            filing a Petition for Expungement (Form A) with the court. This form
            must be completed and submitted along with supporting documentation
            that proves your eligibility. Our platform provides easy access to
            the expungement forms and step-by-step instructions to guide you
            through the process.
          </CustomTypography>
          <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {additionalResourcesCards.map((card, index) => (
              <CardWithLink key={index} content={card} />
            ))}
          </div>
        </section>
      </CardBody>
    </Card>
  );
};

export default WhyConsiderExpungement;
