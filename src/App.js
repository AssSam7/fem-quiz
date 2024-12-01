import data from "./data.json";

import { useState } from "react";

import Option from "./components/Option";
import Welcome from "./components/Welcome";
import QuestionCard from "./components/QuestionCard";
import OptionList from "./components/OptionList";

function App() {
  const subjects = data.quizzes.map((item) => ({
    title: item.title,
    iconName: item.icon,
  }));

  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const onQuizStart = (topic) => {
    const topicData = data.quizzes.filter((item) => item.title === topic);
    console.log("Topic Data is: ", topicData);
    setSelectedTopic(topicData[0]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionNumber <= selectedTopic.questions.length) {
      setCurrentQuestionNumber((prevNumber) => prevNumber + 1);
    }
  };

  return (
    <div className="container">
      {selectedTopic ? (
        <QuestionCard
          question={{
            id: currentQuestionNumber + 1,
            total: selectedTopic.questions.length,
            ...selectedTopic.questions[currentQuestionNumber],
          }}
          onNextQuestion={handleNextQuestion}
          handleScore={setScore}
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
