import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import HorizontalCard from "../../components/HorizontalCard";

const WhatIsExpungement = () => {
  const heading = "What is Expungement?";

  const whatIsExpungementText =
    "Expungement is the legal process that allows certain criminal records to be sealed or removed from public view, giving individuals the opportunity for a fresh start. Once an expungement is granted, records will not appear in most background checks conducted by employers, landlords, or educational institutions. However, expunged records can still be accessed by law enforcement and certain government agencies.";

  const horizontalCards = [
    {
      category: "Benefits",
      title: "Benefits of Expungement",
      description:
        "Expungement offers various benefits such as improving job prospects, better access to housing, and no impact on student loans.",
      points: [
        {
          title: "Employment",
          description:
            "Expungement removes the record from most employment background checks, improving job prospects.",
        },
        {
          title: "Housing",
          description:
            "Landlords cannot see expunged records during rental applications, giving individuals better access to housing.",
        },
        {
          title: "Education and Loans",
          description:
            "Expunged records will not impact student loans, financial aid, or admission to educational programs.",
        },
      ],
    },
    {
      category: "Exceptions",
      title: "Exceptions to Expungement",
      description:
        "While expungement removes the record from public view, certain entities may still access it, including law enforcement and licensing boards.",
      points: [
        {
          title: "Law Enforcement",
          description: "For future investigations or criminal cases.",
        },
        {
          title: "Government Employment",
          description:
            "Expunged records may be visible when applying for jobs in law enforcement or other sensitive positions.",
        },
        {
          title: "Licensing Boards",
          description:
            "Some professional boards may access expunged records during their background check process.",
        },
      ],
    },
  ];


  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="font-normal px-[64px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <CustomTypography variant="paragraph">
            {whatIsExpungementText}
          </CustomTypography>
        </section>

        {/* Horizontal Cards for Benefits and Exceptions */}
        <section className="mb-16 grid gap-8 grid-cols-1 sm:grid-cols-2">
          {horizontalCards.map((card, index) => (
            <HorizontalCard key={index} content={card} />
          ))}
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Next Steps for Expungement
          </CustomTypography>
          <CustomTypography variant="paragraph">
            To start the expungement process, you will need to file a Petition
            for Expungement (Form A) with the court and gather supporting
            documents. Our platform provides all the necessary forms and
            step-by-step guidance to help you through the process. Access the
            Expungement Form Here
          </CustomTypography>
        </section>
      </CardBody>
    </Card>
  );
};

export default WhatIsExpungement;
