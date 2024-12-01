export default function ContentBox({ ques }) {
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
