import { ArrowDown } from "lucide-react";

export function DownloadResumeButton() {
  return (
    <a
      href="/resume/Rahadian_Maulana_CV.pdf"
      download="Rahadian_Maulana_CV.pdf"
      className="no-print group inline-flex items-center gap-3 min-h-12 pl-6 pr-1.5 rounded-full text-[15px] font-semibold
                 bg-accent text-on-accent no-underline transition duration-300 ease-out
                 hover:bg-accent-hover active:scale-[0.98]"
    >
      Download PDF
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-y-0.5">
        <ArrowDown size={16} strokeWidth={2} />
      </span>
    </a>
  );
}
