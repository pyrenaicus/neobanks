import InfoBox from "./InfoBox";

const TransactionsInfo = () => {
  return (
    <div className="transactions-info">
      <InfoBox title="transactions" content="35" subtitle="last month" />
      <InfoBox title="transactions" content="3" subtitle="today" />
    </div>
  );
};

export default TransactionsInfo;
