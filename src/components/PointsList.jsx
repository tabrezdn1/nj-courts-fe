import {
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import Instructions from "./Instructions";

const PointsList = ({ listPoints }) => {
  return (
    <div className="w-full max-w-lg px-4 sm:px-6 md:w-[40rem] py-5">
      <Timeline>
        {listPoints.map((point, pointIndex) => (
          <TimelineItem key={`${point.title}-${pointIndex}`}>
            {pointIndex < listPoints.length - 1 && <TimelineConnector />}
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="text-gray-900"
                className="leading-none text-sm sm:text-base md:text-lg"
              >
                {point.title}
              </Typography>
            </TimelineHeader>

            <TimelineBody className="pt-2 pb-4 sm:pb-8">
              <Typography
                color="gray"
                className="font-normal text-gray-600 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base"
              >
                {point.description}
              </Typography>
              {point.steps && <Instructions steps={point.steps} />}
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default PointsList;
