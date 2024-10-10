import { Card, CardBody, Typography } from "@material-tailwind/react";

import Heading from "../components/Heading";

const Home = () => {
  const heading = "Home";
  return (
    <>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <CardBody className="font-normal px-[64px]">
          <Typography color="gray" className="py-1 w-1/2 text-2xl">
            Welcome to the New Jersey Courts Online Forms Portal. Simplify your
            legal processes by accessing and completing court forms online. Our
            user-friendly platform guides you through each step, ensuring that
            you provide all necessary information accurately.
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default Home;
