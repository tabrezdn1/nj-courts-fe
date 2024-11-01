import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import NavigateLink from "../../components/NavigateLink";
import PointsList from "../../components/PointsList";
import {
  BookOpenIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const UnderstandingCF = () => {
  const heading = "Understanding Court Forms";

  const sections = [
    {
      title: "What Are Court Forms?",
      description:
        "Court forms are standardized documents used to submit requests, motions, claims, and other legal actions to the court. These forms capture key information about your case, the parties involved, and the specific legal actions being requested.",
      listPoints: [
        {
          title: "Types of Court Forms",
          description:
            "Depending on your case, you may need to file civil, criminal, family, or expungement forms.",
          links: [
            { label: "Civil Court Forms", route: "/civil-court-forms" },
            { label: "Family Court Forms", route: "/family-court-forms" },
            { label: "Criminal Court Forms", route: "/criminal-court-forms" },
            { label: "Expungement Forms", route: "/expungement-forms" },
          ],
        },
        {
          title: "Legal Terminology",
          description:
            "Court forms often contain legal terms and references. Our platform provides definitions and explanations to help you understand what is required.",
          links: [
            {
              label: "Glossary of Legal Terms",
              route: "/resources/glossary-of-legal-terms",
            },
          ],
        },
      ],
      icon: DocumentTextIcon,
    },
    {
      title: "Why Accuracy Is Important",
      description:
        "Filling out court forms accurately is essential for ensuring your case proceeds without delays or rejections. Errors or omissions can lead to delays, fines, or even dismissal of your case.",
      listPoints: [
        {
          title: "Provide Complete Information",
          description:
            "Each section of a form is designed to capture key details relevant to your case. Missing information or incorrect details can result in additional paperwork or resubmission.",
        },
        {
          title: "Follow Instructions Carefully",
          description:
            "Each form comes with its own set of instructions outlining what needs to be included and how it should be filled out.",
          links: [
            { label: "How to Fill Forms Guide", route: "/how-to-fill-forms" },
          ],
        },
      ],
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Common Sections of Court Forms",
      description:
        "While the exact details of court forms vary by case type, many forms include common sections.",
      listPoints: [
        {
          title: "Parties Involved",
          description: "Names and contact details of all parties.",
        },
        {
          title: "Case Details",
          description: "Case number, location, and type of legal action.",
        },
        {
          title: "Legal Justifications",
          description:
            "Reference specific laws or statutes relevant to the case.",
        },
        {
          title: "Supporting Documentation",
          description:
            "Include necessary documents, such as identification or court orders.",
        },
      ],
      icon: BookOpenIcon,
    },
    {
      title: "Additional Resources for Understanding Forms",
      description:
        "If you're unsure about how to complete a specific form, don’t worry. Our platform offers several resources to help you better understand your forms.",
      listPoints: [
        {
          title: "Step-by-Step Guides",
          description:
            "Our guides will walk you through how to complete each section of your form accurately.",
          links: [
            {
              label: "Step-by-Step Guides",
              route: "/how-to-fill-forms/step-by-step-guides",
            },
          ],
        },
        {
          title: "Glossary of Legal Terms",
          description:
            "Definitions of common legal terms encountered in forms.",
          links: [
            { label: "Glossary", route: "/resources/glossary-of-legal-terms" },
          ],
        },
        {
          title: "Help Center",
          description:
            "Answers to frequently asked questions and technical support.",
          links: [{ label: "Help Center", route: "/support/help-center" }],
        },
      ],
      icon: QuestionMarkCircleIcon,
    },
  ];

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="font-normal px-[64px]">
        <Typography color="gray" className="py-1 w-1/2 text-2xl">
          Understanding court forms is crucial for ensuring your case proceeds
          smoothly.
        </Typography>
        {sections.map((section, index) => (
          <div key={index} className="my-8">
            <Typography
              variant="h4"
              color="teal"
              className="font-semibold flex items-center gap-2"
            >
              <section.icon className="w-8 h-8" />
              {section.title}
            </Typography>
            <Typography color="blue-gray" className="mt-2 text-lg">
              {section.description}
            </Typography>
            <PointsList
              listPoints={section.listPoints.map((item) => ({
                ...item,
                description: (
                  <>
                    {item.description}{" "}
                    {item.links &&
                      item.links.map((link, idx) => (
                        <NavigateLink
                          key={idx}
                          link={link.route}
                          label={link.label}
                        />
                      ))}
                  </>
                ),
              }))}
            />
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default UnderstandingCF;
