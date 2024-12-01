import data from "./data.json";

import { useState } from "react";

import Option from "./components/Option";
import Welcome from "./components/Welcome";

function App() {
  const subjects = data.quizzes.map((item) => ({
    title: item.title,
    iconName: item.icon,
  }));

  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const onQuizStart = () => {
    setIsQuizStarted(true);
  };

  return (
    <div className="container">
      {isQuizStarted ? (
        <></>
      ) : (
        <Welcome>
          <div className="w-[45%] flex flex-col gap-5">
            {subjects.map((option) => (
              <Option
                option={option}
                key={option.title}
                onClick={onQuizStart}
              />
            ))}
          </div>
        </Welcome>
      )}
    </div>
  );
}

export default App;
