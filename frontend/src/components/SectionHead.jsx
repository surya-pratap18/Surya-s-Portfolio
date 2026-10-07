export default function SectionHead({ index, title, description }) {
  return (
    <div className="section-head reveal">
      <span className="index">{index}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
