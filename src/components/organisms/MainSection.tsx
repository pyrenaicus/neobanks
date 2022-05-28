import SectionHeader from "./SectionHeader";
import TransactionsInfo from "./TransactionsInfo";
import TransactionsGraphic from "./TransactionsGraphic";

const MainSection = () => {
  return (
    <section>
      <SectionHeader
        headline="Transactions history"
        subhead="These are your monthly and daily actions. 📊"
      />
      <TransactionsInfo />
      <TransactionsGraphic />
    </section>
  );
};

export default MainSection;
