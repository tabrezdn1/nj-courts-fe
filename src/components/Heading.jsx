import { Typography, CardHeader } from "@material-tailwind/react";

const Heading = ({ heading, className = "" }) => {
  return (
    <CardHeader
      floated={false}
      shadow={false}
      color="teal"
      variant="gradient"
      className={
        "rounded-md border-b border-white/10 md:h-24 md:px-8 px-2 pt-6 " +
        className
      }
      role="banner" // Added role for better accessibility
      aria-label={heading} // Added aria-label for screen readers
    >
      <Typography
        color="white"
        className="text-4xl md:text-6xl text-shadow"
        aria-hidden="true"
        style={{ textShadow: '1px 1px 0 black' }}
      >
        {" "}
        {/* Added aria-hidden to prevent redundancy */}
        {heading}
      </Typography>
    </CardHeader>
  );
};

export default Heading;
