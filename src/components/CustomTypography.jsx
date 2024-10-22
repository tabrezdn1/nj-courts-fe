import { Typography } from "@material-tailwind/react";

const CustomTypography = ({ children, variant = "heading" }) => {
  const styleMap = {
    heading: "py-1 w-full text-3xl font-bold text-black",
    paragraph: "py-4 w-full text-lg text-gray-700",
    
  };

  const classes = styleMap[variant] || "";

  return (
    <Typography className={classes}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
