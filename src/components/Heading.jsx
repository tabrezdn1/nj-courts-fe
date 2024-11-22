import { Typography, CardHeader } from "@material-tailwind/react";

const Heading = ({ heading, className="" }) => {
  return (
    <CardHeader
      floated={false}
      shadow={false}
      color="teal"
      variant="gradient"
      className={"rounded-md border-b border-white/10 pl-4 sm:pl-0 py-10 sm:py-0 sm:p-4 sm:h-32 " + className}
    >
      <Typography color="white" className="text-3xl md:text-7xl sm:mt-6">
        {heading}
      </Typography>
    </CardHeader>
  );
};

export default Heading;
