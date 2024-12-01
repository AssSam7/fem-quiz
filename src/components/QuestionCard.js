import OptionList from "./OptionList";

export default function QuestionCard({ question: qObj }) {
  const { id, question, options, answer, total } = qObj;
  const qOptions = options.map((option, i) => ({ id: i + 1, title: option }));
  return (
    <section class="flex justify-between">
      <div className="w-[40%] flex flex-col gap-[48px]">
        <h3 className="text-dark-navy text-[20px] italic ">
          Question {id} of {total}
        </h3>
        <h1 className="text-lg text-dark-navy font-medium">{question}</h1>
      </div>
      <OptionList options={qOptions} answer={answer} />
    </section>
  );
}
