/**
 * Thin reading-progress bar. Driven entirely by a CSS scroll timeline in
 * globals.css, so it costs no scroll listener and no re-renders.
 */
export function ScrollProgress() {
  return <div aria-hidden="true" className="scroll-progress" />;
}

export default ScrollProgress;
