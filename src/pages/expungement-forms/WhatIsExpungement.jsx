import React, { useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import DefaultAccordion from "../../components/DefaultAccordion";
import HorizontalCard from "../../components/HorizontalCard";

const WhatIsExpungement = () => {
  const heading = "What is Expungement?";

  // Accordion state management for collapsible sections
  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);

  // What is Expungement content
  const whatIsExpungementText =
    "Expungement is the legal process that allows certain criminal records to be sealed or removed from public view, giving individuals the opportunity for a fresh start. Once an expungement is granted, records will not appear in most background checks conducted by employers, landlords, or educational institutions. However, expunged records can still be accessed by law enforcement and certain government agencies.";

  // Accordion content for How Expungement Works, Eligibility for Expungement, and Next Steps for Expungement
  const accordionItems = [
    {
      header: "How Expungement Works",
      open: openAcc1,
      handleOpen: () => setOpenAcc1(!openAcc1),
      content: {
        description:
          "In New Jersey, expungement applies to records maintained by the courts, law enforcement, and detention facilities. It essentially 'seals' the record, preventing it from being viewed by the general public. Once expungement is granted, you can legally state that you have not been convicted of the crime in most situations, such as when applying for jobs or housing."
      }
    },
    {
      header: "Eligibility for Expungement",
      open: openAcc2,
      handleOpen: () => setOpenAcc2(!openAcc2),
      content: {
        description:
          "The eligibility requirements for expungement vary based on the type of offense and the time that has passed since the sentence was completed. Generally, the following factors are considered:",
        list: [
          { title: "Type of Offense", description: "Serious crimes like murder, kidnapping, and sexual offenses are not eligible for expungement." },
          { title: "Time Passed", description: "Indictable offenses (felonies) require a waiting period of 10 years, while disorderly persons offenses can typically be expunged after 5 years." },
          { title: "Completion of Sentence", description: "You must have completed all terms of your sentence, including probation, fines, and community service, before applying for expungement." }
        ]
      }
    },
    {
      header: "Next Steps for Expungement",
      open: openAcc3,
      handleOpen: () => setOpenAcc3(!openAcc3),
      content: {
        description:
          "To start the expungement process, you will need to file a Petition for Expungement (Form A) with the court and gather supporting documents. Our platform provides all the necessary forms and step-by-step guidance to help you through the process.",
        list: [
          { title: "Access the Expungement Form Here", description: "[Route to ONLINE FORM page]" }
        ]
      }
    }
  ];

  // Cards for Benefits and Exceptions to Expungement
  const horizontalCards = [
    {
      category: "Benefits",
      title: "Benefits of Expungement",
      description: "Expungement offers various benefits such as improving job prospects, better access to housing, and no impact on student loans.",
      points: [
        { title: "Employment", description: "Expungement removes the record from most employment background checks, improving job prospects." },
        { title: "Housing", description: "Landlords cannot see expunged records during rental applications, giving individuals better access to housing." },
        { title: "Education and Loans", description: "Expunged records will not impact student loans, financial aid, or admission to educational programs." }
      ]
    },
    {
      category: "Exceptions",
      title: "Exceptions to Expungement",
      description: "While expungement removes the record from public view, certain entities may still access it, including law enforcement and licensing boards.",
      points: [
        { title: "Law Enforcement", description: "For future investigations or criminal cases." },
        { title: "Government Employment", description: "Expunged records may be visible when applying for jobs in law enforcement or other sensitive positions." },
        { title: "Licensing Boards", description: "Some professional boards may access expunged records during their background check process." }
      ]
    }
  ];

  // Action card for linking to the form
  const cardWithLink = {
    title: "File Your Expungement",
    description: "Start your expungement process today by filing the necessary forms.",
    link: "/online-form",
    buttonText: "Go to Expungement Form"
  };

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

        {/* Accordion Section for How Expungement Works, Eligibility, and Next Steps */}
        <section className="mb-16">
          <DefaultAccordion items={accordionItems} />
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
            To start the expungement process, you will need to file a Petition for Expungement (Form A) with the court and gather supporting documents. Our platform provides all the necessary forms and step-by-step guidance to help you through the process.
            Access the Expungement Form Here
            </CustomTypography>
          </section>
      </CardBody>
    </Card>
  );
};

export default WhatIsExpungement;
