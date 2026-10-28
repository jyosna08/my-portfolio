import Section from "./Section";
import StackCard from "./StackCard";
import { stackCards } from "../data";

export default function Stack() {
  return (
    <Section id="stack" label="HOW IT FITS TOGETHER" title="The Stack" dot="amber">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackCards.map((card) => <StackCard key={card.label} {...card} />)}
      </div>
    </Section>
  );
}
