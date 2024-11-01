import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import {
  BriefcaseIcon,
  HomeIcon,
  AcademicCapIcon,
  HeartIcon,
  UserIcon,
  KeyIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const WhyConsiderExpungement = () => {
  const heading = "Why Consider Expungement?";

  const sections = [
    {
      title: "Improved Employment Opportunities",
      icon: BriefcaseIcon,
      description:
        "A criminal record can significantly limit your job prospects. Expungement allows you to legally answer 'No' to questions about past convictions on most job applications, greatly improving your employment opportunities.",
      points: [
        {
          title: "Better Job Prospects",
          content:
            "Expunged records do not show up on most background checks conducted by private employers, giving you the freedom to pursue a wider range of career options.",
        },
        {
          title: "Professional Licensing",
          content:
            "Some professional boards and licensing agencies might still see expunged records, but many will consider that your record has been cleared.",
        },
      ],
    },
    {
      title: "Access to Housing and Financial Services",
      icon: HomeIcon,
      description:
        "Expungement can make it easier to secure housing, as many landlords conduct background checks. It also improves access to financial aid.",
      points: [
        {
          title: "Housing Applications",
          content:
            "Landlords often reject applicants based on criminal history. Expungement helps you secure stable housing by removing your record from these checks.",
        },
        {
          title: "Improved Access to Financial Aid",
          content:
            "Expunged records do not affect eligibility for student loans or financial aid programs.",
        },
      ],
    },
    {
      title: "Enhanced Personal and Professional Relationships",
      icon: UserIcon,
      description:
        "Living with a criminal record can strain relationships. Expungement helps you rebuild trust and confidence in your relationships.",
      points: [
        {
          title: "Rebuilding Trust",
          content:
            "Without a criminal record to follow you, it's easier to build positive relationships with family and friends.",
        },
        {
          title: "Professional Advancement",
          content:
            "Expungement removes barriers in advancing your career and growing professionally.",
        },
      ],
    },
    {
      title: "Educational Opportunities and Personal Growth",
      icon: AcademicCapIcon,
      description:
        "Expungement can increase your chances of being accepted into educational programs, allowing you to further your education.",
      points: [
        {
          title: "Higher Education Admissions",
          content:
            "With an expunged record, you can apply to colleges or vocational programs without fear that your past will affect your chances of admission.",
        },
        {
          title: "Financial Freedom",
          content:
            "Expungement helps avoid financial setbacks associated with denied educational opportunities.",
        },
      ],
    },
    {
      title: "Restoration of Rights",
      icon: KeyIcon,
      description:
        "Expungement can restore certain rights lost due to a criminal conviction, allowing you to fully reintegrate into society.",
      points: [
        {
          title: "Restoring Civil Rights",
          content:
            "For some, expungement can result in the restoration of civil rights, like the right to vote or serve on a jury.",
        },
      ],
    },
    {
      title: "Peace of Mind and Closure",
      icon: HeartIcon,
      description:
        "Expungement provides peace of mind by allowing you to move forward confidently without the burden of a criminal history.",
      points: [
        {
          title: "Fresh Start",
          content:
            "With an expunged record, you no longer have to explain your criminal history during interviews, housing applications, or other important aspects of life.",
        },
        {
          title: "Mental and Emotional Relief",
          content:
            "Expungement offers closure and the ability to move forward confidently, knowing that you've taken steps to clear your record.",
        },
      ],
    },
  ];

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="px-8 py-12 space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4 mb-10">
            <div className="flex items-center gap-4 p-4 bg-teal-300 rounded-lg shadow-md">
              <section.icon className="w-10 h-10 text-white" />
              <Typography variant="h4" color="white" className="font-bold">
                {section.title}
              </Typography>
            </div>

            <Typography color="blue-gray" className="text-lg mt-2">
              {section.description}
            </Typography>

            <ul className="space-y-3 pl-4">
              {section.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-teal-500" />
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {point.title}
                    </Typography>
                    <Typography color="gray" className="text-base">
                      {point.content}
                    </Typography>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default WhyConsiderExpungement;
