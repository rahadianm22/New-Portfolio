export function DownloadResumeButton() {
  return (
    <a
      href="/resume/Rahadian_Maulana_CV.pdf"
      download="Rahadian_Maulana_CV.pdf"
      className="no-print inline-flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-[#1937B3]"
      style={{
        fontFamily: "'Urbanist', sans-serif",
        fontWeight: 600,
        backgroundColor: "#2B4EFF",
        color: "#FFFFFF",
        fontSize: "13px",
        textDecoration: "none",
      }}
    >
      Download PDF
    </a>
  );
}
