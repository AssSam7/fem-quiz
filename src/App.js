import data from "./data.json";

import { useCallback, useEffect, useMemo, useState } from "react";

import OptionList from "./components/OptionList";
import QuestionCard from "./components/QuestionCard";
import Welcome from "./components/Welcome";
import QuizResult from "./components/QuizResult";

function App() {
  const [quiz, setQuiz] = useState();
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const subjects = data.quizzes.map((item) => ({
    title: item.title,
    iconName: item.icon,
  }));

  const totalQuestions = quiz && quiz.questions.length;
  const questionObj = useMemo(() => {
    if (quiz) {
      return quiz.questions[questionNum];
    }
    return null;
  }, [quiz, questionNum]);

  const quizOptions = useMemo(() => {
    if (questionObj) {
      return questionObj?.options.map((option, i) => ({
        id: i + 1,
        title: option,
      }));
    }
    return null;
  }, [questionObj]);

  const onQuizStart = (topic) => {
    const quizTopicObj = data.quizzes.filter((item) => item.title === topic);
    setQuiz(quizTopicObj[0]);
  };

  const handleNext = (result) => {
    if (result && !quizCompleted) {
      setQuestionNum((prevQuesNum) =>
        prevQuesNum < totalQuestions ? prevQuesNum + 1 : 0
      );
      setScore((prevScore) => prevScore + 1);
    } else if (!quizCompleted) {
      setQuestionNum((prevQuesNum) =>
        prevQuesNum < totalQuestions ? prevQuesNum + 1 : 0
      );
    }
  };

  useEffect(() => {
    console.log("Quiz completed: ", quizCompleted);
    if (questionNum === totalQuestions - 1) {
      setQuizCompleted(true);
    }
  }, [questionNum, quizCompleted, totalQuestions]);

  useEffect(() => {
    console.log("Score is: ", score);
  }, [score]);

  return (
    <div className="container">
      {quiz && !quizCompleted ? (
        <QuestionCard
          question={{
            id: questionNum + 1,
            total: quiz.questions.length,
            ...quiz.questions[questionNum],
          }}
        >
          <OptionList
            options={quizOptions}
            answer={questionObj.answer}
            onClick={() => {}}
            handleNext={handleNext}
          />
        </QuestionCard>
      ) : quizCompleted ? (
        <QuizResult
          title={quiz.title}
          iconName={quiz.icon}
          score={score}
          total={totalQuestions}
        />
      ) : (
        <Welcome>
          <OptionList options={subjects} onClick={onQuizStart} />
        </Welcome>
      )}
    </div>
  );
}

export default App;
