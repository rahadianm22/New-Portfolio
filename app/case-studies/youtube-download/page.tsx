import { ArrowUpRight, Train, Clock, Gamepad2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CaseHero,
  CaseSection,
  Lead,
  Body,
  ProblemGrid,
  ProcessSteps,
  Comparison,
  Reflection,
  NextCase,
} from "@/components/case-study/Kit";

export const metadata = {
  title: "YouTube: Redesigning the Download Feature · Rahadian Maulana",
  description:
    "An independent case study on YouTube's offline download feature: validating commuter frustrations through interviews, then redesigning deletion and reordering to cut the steps down.",
};

const MEDIUM_URL = "https://medium.com/@Rahadianm22/case-study-redesigning-feature-of-youtube-download-3f4d7e63a8e0";

const QUICK_FACTS = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Type", value: "Independent case study" },
  { label: "Platform", value: "YouTube downloads" },
  { label: "Timeline", value: "2023" },
];

const PROBLEMS = [
  {
    label: "What kept happening",
    body: "Downloaded videos couldn't be saved to local device storage, and disappeared on their own if left unwatched too long. On a route with patchy signal, losing a video I'd deliberately downloaded defeated the point of downloading it.",
  },
  {
    label: "What made it worse",
    body: "Deleting was one video at a time, no batch option. Resolution couldn't be changed after downloading. Reordering a queue of a few videos took 10 taps across 11 screens, more effort than just rewatching whatever was already first in line.",
  },
];

const PROCESS = [
  {
    title: "Checking it wasn't just me",
    body: "Before designing anything, I ran interviews and a survey with other people who download YouTube videos for offline viewing. The same five complaints came up independently. This wasn't one commuter's pet peeve.",
  },
  {
    title: "Mapping the real cost in steps",
    body: "Traced the existing flows screen by screen instead of going on feel: deleting a video took 3 taps across 4 screens, reordering took 10 taps across 11. That gap between what it should take and what it actually took became the design target.",
  },
  {
    title: "Designing around Haikal",
    body: "Built the redesign around Haikal, a 27-year-old commuter persona pulled from the interviews: an hour each way, tutorial and gaming content, wants videos ready to go without fighting the app to manage them.",
  },
];

const TAPS = [
  { task: "Delete a video", before: "3", beforeDetail: "taps · 4 screens", after: "2", afterDetail: "taps · 1 screen (swipe)" },
  { task: "Reorder the queue", before: "10", beforeDetail: "taps · 11 screens", after: "4", afterDetail: "taps · 3 screens" },
];

function Persona() {
  const traits = [
    { icon: Train, text: "Commutes an hour each way" },
    { icon: Gamepad2, text: "Watches tutorial and gaming content" },
    { icon: Clock, text: "Wants videos ready, without managing them" },
  ];
  return (
    <div className="grid gap-6 rounded-lg bg-accent p-7 text-on-accent md:grid-cols-12 md:items-center md:p-10">
      <div className="md:col-span-5">
        <p className="text-sm font-semibold text-white/85">Persona, from the interviews</p>
        <p className="mt-3 text-4xl md:text-5xl font-bold tracking-[-0.035em]">Haikal, 27</p>
        <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-white/85">
          Every design decision was checked against one question: does this save Haikal a tap on a
          crowded train?
        </p>
      </div>
      <ul className="grid gap-3 md:col-span-7">
        {traits.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-4 rounded-md bg-white/10 p-4 ring-1 ring-white/20">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Icon size={18} strokeWidth={1.75} />
            </span>
            <span className="text-[15px] font-medium">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function YoutubeDownloadCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
        eyebrow="Personal Project · Mobile UX"
        title="YouTube: Redesigning the Download Feature."
        intro={
          <>
            I commute an hour each way and rely on YouTube&apos;s offline downloads to get through it.
            Videos vanishing on their own and deleting them one at a time kept bothering me enough that I
            turned it into a full case study: interviews, a redesigned deletion flow, a faster way to
            reorder.
          </>
        }
        facts={QUICK_FACTS}
        actions={
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 min-h-14 pl-7 pr-2 rounded-full text-[15px] font-semibold
                       bg-accent text-on-accent no-underline transition duration-300 ease-out hover:bg-accent-hover active:scale-[0.98]"
          >
            Read the original on Medium
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>
        }
        cover={
          <Comparison
            rows={TAPS}
            note="Step counts mapped directly from the existing flow against the redesigned one, not estimates."
          />
        }
      />

      <CaseSection label="Context" title="Not a client brief. A daily annoyance, researched properly.">
        <Lead>
          This is an independent case study on a feature I use almost daily. I interviewed and surveyed
          other commuters who download YouTube videos for offline viewing, then designed and prototyped a
          fix in Figma.
        </Lead>
      </CaseSection>

      <CaseSection label="The problem" title="Downloads that vanish, and a queue that fights back." tone="alt">
        <ProblemGrid items={PROBLEMS} />
      </CaseSection>

      <CaseSection label="Process" title="From one commuter's complaint to a shared problem.">
        <ProcessSteps items={PROCESS} />
        <div className="mt-6">
          <Persona />
        </div>
      </CaseSection>

      <CaseSection label="The solution" title="Swipe to delete, drag to reorder." tone="alt">
        <Body>
          Two ways to delete, depending on the situation: swipe a single video away in place, or switch
          to multi-select to clear several at once instead of repeating the same flow one video at a time.
          Reordering became drag-and-drop directly in the list, instead of routing through a separate
          screen for every move. The tap counts at the top of this page are the result.
        </Body>
      </CaseSection>

      <CaseSection label="Outcome" title="A proposal, with the numbers behind it.">
        <Body>
          This was a proposal, not a shipped feature. YouTube doesn&apos;t take outside redesigns, and I
          don&apos;t have adoption numbers to report. What it did do: turn a recurring commute annoyance
          into a fully scoped problem with real numbers behind it, and confirm through other commuters
          that the friction wasn&apos;t just in my head.
        </Body>
      </CaseSection>

      <Reflection>
        Not every case study starts with a client brief. This one started with being annoyed on the same
        train ride for months. Checking my own friction against other people, instead of assuming they
        felt it too, is what turned a complaint into something worth showing.
      </Reflection>

      <NextCase currentId="youtube-download" />
      <Footer />
    </main>
  );
}
