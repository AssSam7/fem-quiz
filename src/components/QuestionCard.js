import ContentBox from "./ContentBox";
import OptionList from "./OptionList";

export default function QuestionCard({ question: qObj }) {
  const { id, question, options, answer, total } = qObj;
  const qOptions = options.map((option, i) => ({ id: i + 1, title: option }));
  return (
    <section class="flex justify-between">
      <ContentBox ques={{ id, total, question }} />
      <OptionList options={qOptions} answer={answer} />
    </section>
  );
}
