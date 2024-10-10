import {
    Card,
    CardBody,
    Typography,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
  } from "@material-tailwind/react";

import Heading from "../../components/Heading"

const UnderstandingCF = () => {
    const heading = "Understanding Court Forms"
    return (
        <>
        <Card className="w-full p-8 h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading}/>
          <CardBody className="p-8 font-normal">
            <Typography color="gray" className="py-1 w-1/2 text-2xl">
              Our platform offers:
            </Typography>
            <Typography color="gray" className="py-1"></Typography>
            <div className="w-[32rem] py-5">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="leading-none"
                    >
                      Easy Access
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-gray-600"
                    >
                      Find all the court forms you need in one place.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="leading-none"
                    >
                      Guided Assistance
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-gray-600"
                    >
                      Step-by-step instructions to help you complete forms
                      correctly.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="leading-none"
                    >
                      Secure Submission
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody>
                    <Typography
                      variant="small"
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      Submit your forms online securely or print them for
                      in-person filing.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div>
          </CardBody>
        </Card>
      </>
    );
}

export default UnderstandingCF;
