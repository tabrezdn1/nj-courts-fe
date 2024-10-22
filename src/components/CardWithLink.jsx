import {
    Card,
    CardBody,
    CardFooter,
    Typography
  } from "@material-tailwind/react";
import NavigateLink from "../components/NavigateLink";
   
  export function CardWithLink({ content }) {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          {content?.icon && <div className="mb-4 h-12 w-12 text-gray-900">{content.icon}</div>}
          {content?.title && (
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {content.title}
            </Typography>
          )}
          {content?.description && (
            <Typography>
              {content.description}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="pt-0">
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
                strokeWidth={2}
                stroke="currentColor"
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
        </CardFooter>
      </Card>
    );
  }

  export default CardWithLink;
