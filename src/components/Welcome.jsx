import ContentBox from "./ContentBox";

export default function Welcome({ children }) {
  return (
    <section className="flex justify-between">
      <ContentBox />
      {children}
    </section>
  );
}
