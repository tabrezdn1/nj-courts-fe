import { Card, CardBody, Typography } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import {
  BriefcaseIcon,
  HomeIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const WhatIsExpungement = () => {
  const heading = "What is Expungement?";

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
      <Heading heading={heading} />
      <CardBody className="px-8 py-12">
        <Typography variant="h3" color="blue-gray" className="mb-6 font-bold">
          What is Expungement?
        </Typography>
        <Typography color="gray" className="mb-8 text-lg leading-relaxed">
          Expungement is the legal process that allows certain criminal records
          to be sealed or removed from public view, giving individuals the
          opportunity for a fresh start. Once an expungement is granted, records
          will not appear in most background checks conducted by employers,
          landlords, or educational institutions. However, expunged records can
          still be accessed by law enforcement and certain government agencies.
        </Typography>

        <Typography
          variant="h3"
          color="blue-gray"
          className="mt-10 mb-6 font-bold"
        >
          How Expungement Works
        </Typography>
        <Typography color="gray" className="mb-8 text-lg leading-relaxed">
          In New Jersey, expungement applies to records maintained by the
          courts, law enforcement, and detention facilities. It essentially
          "seals" the record, preventing it from being viewed by the general
          public. Once expungement is granted, you can legally state that you
          have not been convicted of the crime in most situations, such as when
          applying for jobs or housing.
        </Typography>

        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <div className="md:w-1/2">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-6 font-bold"
            >
              Benefits of Expungement
            </Typography>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <BriefcaseIcon className="w-8 h-8 text-teal-500" />
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Employment
                  </Typography>
                  <Typography color="gray" className="text-lg">
                    Expungement removes the record from most employment
                    background checks, improving job prospects.
                  </Typography>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <HomeIcon className="w-8 h-8 text-teal-500" />
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Housing
                  </Typography>
                  <Typography color="gray" className="text-lg">
                    Landlords cannot see expunged records during rental
                    applications, giving individuals better access to housing.
                  </Typography>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <AcademicCapIcon className="w-8 h-8 text-teal-500" />
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Education and Loans
                  </Typography>
                  <Typography color="gray" className="text-lg">
                    Expunged records will not impact student loans, financial
                    aid, or admission to educational programs.
                  </Typography>
                </div>
              </li>
            </ul>
          </div>

          {/* Exceptions to Expungement */}
          <div className="md:w-1/2">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-6 font-bold"
            >
              Exceptions to Expungement
            </Typography>
            <Typography color="gray" className="text-lg leading-relaxed mb-4">
              While expungement removes the record from public view, certain
              entities may still access it, including:
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <ShieldCheckIcon className="w-8 h-8 text-teal-500" />
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Law Enforcement
                  </Typography>
                  <Typography color="gray" className="text-lg">
                    For future investigations or criminal cases.
                  </Typography>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheckIcon className="w-8 h-8 text-teal-500" />
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Government Employment
                  </Typography>
                  <Typography color="gray" className="text-lg">
                    Expunged records may be visible when applying for jobs in
                    law enforcement or other sensitive positions.
                  </Typography>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheckIcon className="w-8 h-8 text-teal-500" />
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Licensing Boards
                  </Typography>
                  <Typography color="gray" className="text-lg">
                    Some professional boards may access expunged records during
                    their background check process.
                  </Typography>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default WhatIsExpungement;
