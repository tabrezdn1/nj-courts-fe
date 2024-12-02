import { Card, CardBody, Typography } from "@material-tailwind/react";
import NavigateLink from "../components/NavigateLink";

export function HorizontalCard({ content }) {
  return (
    <Card
      className="w-full max-w-[48rem] flex-row"
      role="article"
      aria-labelledby="horizontal-card-title"
    >
      <CardBody>
        <Typography
          id="horizontal-card-title"
          variant="h6"
          color="black"
          className="mb-4 uppercase"
        >
          {content?.category || "Category"}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {content?.title || "Default Title"}
        </Typography>
        <Typography
          color="black"
          className="font-normal"
          aria-describedby="content-description"
        >
          {content?.description || "Default description of the content."}
        </Typography>
        {content?.link && content?.buttonText && (
          <NavigateLink
            link={content.link}
            label={content.buttonText}
            className="flex items-center gap-2 text-blue-500 hover:underline mt-4"
            aria-label={`Learn more about ${content.title || "this content"}`}
          ></NavigateLink>
        )}
      </CardBody>
    </Card>
  );
}

export default HorizontalCard;
