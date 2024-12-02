import { useEffect, useState } from "react";
import Option from "./Option";

export default function OptionList({
  options,
  answer,
  onClick,
  handleNextQuestion,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const onSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    onClick(answer);
  };

  const handleSubmitAnswer = () => {
    setIsAnswerSubmitted(true);
  };

  useEffect(() => {
    if (isAnswerSubmitted) {
      handleNextQuestion();
    }
  }, [isAnswerSubmitted]);

  return (
    <div className="w-[45%] flex flex-col gap-5">
      {options.map((option) => (
        <Option
          option={option}
          key={option.title}
          handleClick={onSelectAnswer}
          selectedAnswer={selectedAnswer}
          correctAnswer={answer}
          answerSubmitted={isAnswerSubmitted}
        />
      ))}
      {answer && (
        <button
          className="mt-5 bg-purple rounded-3xl text-base font-normal text-pure-white p-8"
          onClick={handleSubmitAnswer}
        >
          {isAnswerSubmitted ? "Next Question" : "Submit Answer"}
        </button>
      )}
    </div>
  );
}
