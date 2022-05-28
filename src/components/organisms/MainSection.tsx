import SectionHeader from "./SectionHeader";
import TransactionsInfo from "./TransactionsInfo";
import TransactionsGraphic from "./TransactionsGraphic";

const MainSection = () => {
  return (
    <section>
      <SectionHeader />
      <TransactionsInfo />
      <TransactionsGraphic />
    </section>
  );
};

export default MainSection;
