import { Typography, CardHeader } from "@material-tailwind/react";

const Heading = ({ heading, className="" }) => {
  return (
    <CardHeader
      floated={false}
      shadow={false}
      color="teal"
      variant="gradient"
      className={"rounded-md border-b border-white/10 p-4 min-h-16 " + className}
    >
      <Typography color="white" className="md:mt-[32px] pr-[35px] text-3xl md:text-7xl">
        {heading}
      </Typography>
    </CardHeader>
  );
};

export default Heading;
