
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

const Home = () => {
  
  return (
    <>
      <Card className="w-full p-8 h-[calc(100vh-2rem)] overflow-y-auto">
        <CardHeader
          floated={false}
          shadow={false}
          color="gray"
          variant="gradient"
          className="m-0 rounded-md border-b border-white/10 p-8 min-h-16"
        >
          <Typography
            color="white"
            variant="h1"
            className="text-5xl font-normal"
          >
            Home
          </Typography>
        </CardHeader>
        <CardBody className="p-8 font-normal">
          <Typography>
            Welcome to the New Jersey Courts Online Forms Portal. Simplify your
            legal processes by accessing and completing court forms online. Our
            user-friendly platform guides you through each step, ensuring that
            you provide all necessary information accurately.
          </Typography>
        </CardBody>
        <CardFooter className="mt-12 p-0"></CardFooter>
      </Card>
    </>
  );
};

export default Home;
