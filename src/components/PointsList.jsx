import {
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";

const PointsList = ({listPoints}) => {
  return (
    <div className="w-[32rem] py-5">
      <Timeline>
        {listPoints.map((point, pointIndex) => (
          <TimelineItem key={`${point}=${pointIndex}`}>
            
            {/* Hide line connecter for the last point */}
            {pointIndex < listPoints.length - 1 && <TimelineConnector />}
            
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                {point.title}
              </Typography>
            </TimelineHeader>
            
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                {point.description}
              </Typography>
            </TimelineBody>

          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default PointsList;