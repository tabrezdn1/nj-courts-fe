import { Typography } from "@material-tailwind/react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center p-2">
      <div className="flex items-center w-fit">
        <img src="/logo.svg" alt="logo" className="h-32" />
      </div>

      <Typography className="text-3xl sm:text-4xl font-bold text-gray-800">
        Coming Soon
      </Typography>
    </div>
  );
};

export default ComingSoon;
