import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import NavigateLink from "../components/NavigateLink";

export function HorizontalCard({ content }) {
  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 shrink-0 rounded-r-none"
      >
        {/* You can add an image or other content here if needed */}
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {content?.category || "Category"}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {content?.title || "Default Title"}
        </Typography>
        <Typography color="gray" className="font-normal">
          {content?.description || "Default description of the content."}
        </Typography>
        {content?.link && content?.buttonText && (
          <NavigateLink
            link={content.link}
            label={content.buttonText}
            className="flex items-center gap-2 text-blue-500 hover:underline mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </NavigateLink>
        )}
      </CardBody>
    </Card>
  );
}

export default HorizontalCard;
