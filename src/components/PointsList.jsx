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
    <div className="w-[40rem] py-5">
      <Timeline>
        {listPoints.map((point, pointIndex) => (
          <TimelineItem key={`${point.title}-${pointIndex}`}>
            {pointIndex < listPoints.length - 1 && <TimelineConnector />}
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h5"
                color="text-gray-900"
                className="leading-none"
              >
                {point.title}
              </Typography>
            </TimelineHeader>

            <TimelineBody className="pb-8">
              <Typography
                color="gray"
                className="font-normal text-gray-600 mb-4"
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
