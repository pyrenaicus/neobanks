export type SectionHeaderType = {
  headline: string;
  subhead: string;
};

const SectionHeader = (props: SectionHeaderType) => {
  const { headline, subhead } = props;
  return (
    <header className="section-header">
      <h2 className="section-headline">{headline}</h2>
      <p className="section-subhead">{subhead}</p>
    </header>
  );
};

export default SectionHeader;
