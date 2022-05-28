export type InfoboxType = {
  title: string;
  content: string;
  subtitle: string;
};

const InfoBox = (props: InfoboxType) => {
  const { title, content, subtitle } = props;
  // we are passing data by props
  return (
    <div className="info-box">
      <div className="info-box-title">{title}</div>
      <div className="info-box-content">{content}</div>
      <div className="info-box-subtitle">{subtitle}</div>
    </div>
  );
};

export default InfoBox;
