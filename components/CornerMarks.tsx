/**
 * Small L-shaped crop marks in each corner of a section, like registration
 * marks on a printed drawing sheet. Purely decorative, aria-hidden.
 */
export default function CornerMarks() {
  const markClasses =
    "absolute w-3 h-3 border-blueprint/40 pointer-events-none";
  return (
    <div aria-hidden="true">
      <span className={`${markClasses} top-0 left-0 border-l-2 border-t-2`} />
      <span
        className={`${markClasses} top-0 right-0 border-r-2 border-t-2`}
      />
      <span
        className={`${markClasses} bottom-0 left-0 border-l-2 border-b-2`}
      />
      <span
        className={`${markClasses} bottom-0 right-0 border-r-2 border-b-2`}
      />
    </div>
  );
}
