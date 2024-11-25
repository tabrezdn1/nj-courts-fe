import { Typography, CardHeader } from "@material-tailwind/react";

const Heading = ({ heading, className="" }) => {
  return (
    <CardHeader
      floated={false}
      shadow={false}
      color="teal"
      variant="gradient"
      className={"rounded-md border-b border-white/10 md:h-24 md:px-8 px-2 pt-6 " + className}
    >
      <Typography color="white" className="text-4xl md:text-6xl">
        {heading}
      </Typography>
    </CardHeader>
  );
};

export default Heading;
