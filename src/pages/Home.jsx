import { Card, CardBody, Typography, CardFooter, Button, Input } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import Heading from "../components/Heading";
import questions from "../data/homescreen.json";
const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelection, setUserSelection] = useState({});
  const navigate = useNavigate();
  const heading = "NJ Courts E-Forms Portal";

  const routeTo = (card) => {
    // selection for first question
    if (card.formLink) {
      userSelection.formLink = card.formLink;
      userSelection.helpLink = card.helpLink;
    }

    // selection for second question
    if (card.actionType) {
      userSelection.actionType = card.actionType;
    }

    // selection for third question
    if (card.userType) {
      userSelection.userType = card.userType;
    }

    setUserSelection(userSelection);

    if (card.noQuestionForward) {
      if (userSelection.actionType === "checkEligibility") {
        navigate(userSelection.helpLink);
      } else if (userSelection.actionType === "newForm" || userSelection.actionType === "continueForm") {
        navigate(userSelection.formLink);
      }
    } else {
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const back = () => {
    setCurrentQuestion(questions[currentQuestionIndex - 1]);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  return (
    <>
      <div className="w-full h-[calc(100vh-2rem)] overflow-y-auto">
        <Heading heading={heading} />
        <Typography color="gray" className="pt-[55px] pb-4 px-4 text-2xl text-center font-bold">
          {currentQuestion.question}
        </Typography>
        <div className={`grid grid-cols-${currentQuestion.noOfCols} gap-[30px] px-[${currentQuestion.noOfCols == 3 ? "200px" : "350px"}] pt-4`}>
          {
            currentQuestion.options.map((card, index) => (
              <Card key={index} className="w-120 h-60 cursor-pointer" onClick={() => routeTo(card)}>
                <CardBody className="flex justify-center items-center text-center">
                  {card.svg && (
                    <div dangerouslySetInnerHTML={{ __html: card.svg }} />
                  )}
                </CardBody>
                <CardFooter className="pt-0 text-center">
                  <Typography variant="h5" color="gray" className="mb-2">
                    {card.title}
                  </Typography>
                </CardFooter>
              </Card>
            ))
          }
        </div>
        {currentQuestion.id !== 1 && (
          <div className="flex justify-center mt-4">
            <Button color="teal" size="lg" className="w-auto" variant="outlined" onClick={back}>
              Back
            </Button>
          </div>
        )}

      </div>
    </>
  );
};

export default Home;
