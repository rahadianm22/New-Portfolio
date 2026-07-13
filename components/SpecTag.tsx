export default function SpecTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-blueprint uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-redline" />
      {children}
    </span>
  );
}
