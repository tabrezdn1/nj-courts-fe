import React, { useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import CustomTypography from "../../components/CustomTypography";
import HorizontalCard from "../../components/HorizontalCard";
import PointsList from "../../components/PointsList";
import CardWithLink from "../../components/CardWithLink";
import DefaultAccordion from "../../components/DefaultAccordion"; 

const UnderstandingCourtForms = () => {
  const heading = "Understanding Court Forms";
  const introductionText =
    "Court forms are essential documents that must be completed accurately when submitting legal matters to the court. Whether you are involved in a civil, criminal, family, or expungement case, understanding these forms is crucial for ensuring that your legal process runs smoothly. Here’s a breakdown of what you need to know about court forms and how to navigate them:";

  const courtFormsCards = [
    {
      category: "Court Forms",
      title: "Types of Court Forms",
      description:
        "Depending on your case, you may need to file civil, criminal, family, or expungement forms. Each category of forms addresses a different area of law and comes with its own specific requirements.",
      link: "/court-forms",
      buttonText: "View Court Forms",
    },
    {
      category: "Court Forms",
      title: "Legal Terminology",
      description:
        "Court forms often contain legal terms and references to specific laws. Our platform provides definitions and explanations where necessary, helping you better understand what is required.",
      link: "/resources/glossary-of-legal-terms",
      buttonText: "View Glossary",
    },
  ];

  const accuracyTipsPoints = [
    {
      title: "Provide Complete Information",
      description:
        "Each section of a form is designed to capture key details relevant to your case. Missing information or incorrect details can result in additional paperwork or resubmission.",
    },
    {
      title: "Follow Instructions Carefully",
      description:
        "Each form comes with its own set of instructions outlining what needs to be included and how it should be filled out. Our platform offers step-by-step guidance for each form, ensuring that you don’t miss critical sections.",
      links: [
        { text: "Link to How to Fill Forms Guide", route: "/how-to-fill-forms" },
      ],
    },
  ];

  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);
  const [openAcc4, setOpenAcc4] = useState(true);

  const commonSectionsAccordionItems = [
    {
      header: "Parties Involved",
      content: {
        description:
          "This includes the names and contact details of the plaintiff(s), defendant(s), or petitioner(s).",
      },
      handleOpen: () => setOpenAcc1((cur) => !cur),
      open: openAcc1,
    },
    {
      header: "Case Details",
      content: {
        description:
          "The form will ask for information such as the case number, court location, and details of the legal action being requested (e.g., a motion, claim, or expungement).",
      },
      handleOpen: () => setOpenAcc2((cur) => !cur),
      open: openAcc2,
    },
    {
      header: "Legal Justifications",
      content: {
        description:
          "Some forms require you to reference specific laws or statutes under which you are filing. This could include citing grounds for divorce in a family case or referring to expungement eligibility criteria.",
      },
      handleOpen: () => setOpenAcc3((cur) => !cur),
      open: openAcc3,
    },
    {
      header: "Supporting Documentation",
      content: {
        description:
          "In many cases, you will need to attach supporting documents, such as identification, prior court orders, or proof of sentence completion. Forms will specify what documents are needed.",
      },
      handleOpen: () => setOpenAcc4((cur) => !cur),
      open: openAcc4,
    },
  ];

  const tipsForCompletingPoints = [
    {
      title: "Read the Entire Form First",
      description:
        "Before filling out any section, read through the entire form so you understand what’s required.",
    },
    {
      title: "Use Clear Language",
      description:
        "Stick to factual, concise information when completing your form. Avoid jargon, and be as clear as possible.",
    },
    {
      title: "Review Before Submission",
      description:
        "Double-check all information for accuracy before submitting the form to the court. Errors could result in a rejected filing or delayed processing.",
    },
  ];

  const additionalResourcesCards = [
    {
      title: "Step-by-Step Guides",
      description:
        "Our guides will walk you through how to complete each section of your form accurately.",
      link: "/how-to-fill-forms/step-by-step-guides",
      buttonText: "Link to Step-by-Step Guides",
    },
    {
      title: "Glossary of Legal Terms",
      description:
        "Refer to our glossary for definitions of common legal terms that you may encounter when filling out forms.",
      link: "/resources/glossary-of-legal-terms",
      buttonText: "Link to Glossary",
    },
    {
      title: "Help Center",
      description:
        "If you have further questions, our Help Center provides answers to frequently asked questions and offers support on technical and legal questions related to form submissions.",
      link: "/support/help-center",
      buttonText: "Link to Help Center",
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

        <section className="mb-16 grid gap-8 grid-cols-1 sm:grid-cols-2">
          {courtFormsCards.map((card, index) => (
            <HorizontalCard key={index} content={card} />
          ))}
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Why Accuracy Is Important
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            Filling out court forms accurately is essential to ensuring that
            your case proceeds without delays or rejections. Errors or omissions
            on your forms can lead to delays, fines, or even dismissal of your
            case.
          </CustomTypography>
          <PointsList listPoints={accuracyTipsPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Common Sections of Court Forms
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            While the exact details of court forms vary by case type, many forms
            include common sections, such as:
          </CustomTypography>
          <div className="mt-8">
            <DefaultAccordion items={commonSectionsAccordionItems} />
          </div>
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Tips for Completing Court Forms
          </CustomTypography>
          <PointsList listPoints={tipsForCompletingPoints} />
        </section>

        <section className="mb-16">
          <CustomTypography variant="heading">
            Additional Resources for Understanding Forms
          </CustomTypography>
          <CustomTypography variant="paragraph" className="mt-4">
            If you're unsure about how to complete a specific form, don’t worry.
            Our platform offers several resources to help you better understand
            your forms:
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

export default UnderstandingCourtForms;
