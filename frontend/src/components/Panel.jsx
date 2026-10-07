import CornerBrackets from "./CornerBrackets";
export default function Panel({ children, className = "" }) {
  return (
    <div className={`panel ${className}`}>
      <CornerBrackets />
      {children}
    </div>
  );
}
