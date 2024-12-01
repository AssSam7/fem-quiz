import ContentBox from "./ContentBox";

export default function QuestionCard({ question: qObj, children }) {
  const { id, question, total } = qObj;
  return (
    <section className="flex justify-between">
      <ContentBox ques={{ id, total, question }} />
      {children}
    </section>
  );
}
