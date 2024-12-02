export default function ContentBox({ ques, quizCompleted }) {
  return (
    <div className="w-[40%] flex flex-col gap-[48px]">
      {ques ? (
        <>
          <h3 className="text-dark-navy text-[20px] italic ">
            Question {ques.id} of {ques.total}
          </h3>
          <h1 className="text-lg text-dark-navy font-medium">
            {ques.question}
          </h1>
        </>
      ) : quizCompleted ? (
        <h1 className="text-2xl text-dark-navy font-thin">
          Quiz Completed <span className="font-bold">You scored...</span>
        </h1>
      ) : (
        <>
          <h1 className="text-2xl text-dark-navy font-thin">
            Welcome to the <span className="font-bold">Frontend Quiz!</span>
          </h1>
          <p className="text-grey-navy italic">Pick a subject to get started</p>
        </>
      )}
    </div>
  );
}
