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
  Figure,
  FigureStack,
  Reflection,
  NextCase,
  type ProcessStep,
} from "@/components/case-study/Kit";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "YouTube: Redesigning the Download Feature · Rahadian Maulana",
  description:
    "An independent case study on YouTube's offline download feature: validating commuter frustrations through interviews, then redesigning deletion and reordering to cut the steps down.",
  path: "/case-studies/youtube-download",
});

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

const PROCESS: ProcessStep[] = [
  {
    phase: "Validate",
    title: "Checking it wasn't just me",
    body: "Before designing anything, I ran interviews and a survey with other people who download YouTube videos for offline viewing. The same five complaints came up independently. This wasn't one commuter's pet peeve.",
    output: "Five complaints, raised independently",
    href: "#problem",
  },
  {
    phase: "Persona",
    title: "Designing around Haikal",
    body: "Built the redesign around Haikal, a 27-year-old commuter persona pulled from the interviews: an hour each way, tutorial and gaming content, wants videos ready to go without fighting the app to manage them.",
    output: "An empathy map and a persona board",
    href: "#persona",
  },
  {
    phase: "Measure",
    title: "Mapping the real cost in steps",
    body: "Traced the existing flows screen by screen instead of going on feel: deleting a video took 3 taps across 4 screens, reordering took 10 taps across 11. That gap between what it should take and what it actually took became the design target.",
    output: "A tap count for every job: 3 to delete, 10 to reorder",
    href: "#current-flow",
  },
  {
    phase: "Design",
    title: "Three gestures, on the list itself",
    body: "Each complaint got a gesture on the Downloads list instead of a trip to another screen: swipe to delete one video, select to clear several, drag to reorder. All three are built from the same video row, in a normal and an edit state.",
    output: "Swipe, select and drag flows, and the components behind them",
    href: "#solution",
  },
];

const TAPS = [
  { task: "Delete a video", before: "3", beforeDetail: "taps, 4 screens", after: "2", afterDetail: "taps, 1 screen (swipe)" },
  { task: "Reorder the queue", before: "10", beforeDetail: "taps, 11 screens", after: "4", afterDetail: "taps, 3 screens" },
  { task: "Delete several videos", before: "3×", beforeDetail: "taps for every single video", after: "5", afterDetail: "taps, 4 screens, any number of videos" },
];

const yt = (file: string, width: number, height: number, alt: string) => ({
  src: `/case-studies/youtube-download/${file}.png`,
  alt,
  width,
  height,
});

const OLD_FLOWS = [
  {
    image: yt("old-delete", 2124, 976, "Current YouTube flow for deleting a download: open Downloads, tap the menu on a video, tap Delete from downloads, back to the list"),
    caption: "Today, deleting one download: 3 taps across 4 screens, and the same again for every other video.",
  },
  {
    image: yt("old-reorder-1", 2219, 1188, "Current flow to bring a video to the top of downloads, part one: open Downloads, delete the video from its menu, then tap search"),
    caption: "Moving a video to the front of the queue, part one: the list cannot be reordered, so the video is deleted first, then searched for.",
  },
  {
    image: yt("old-reorder-2", 2207, 1412, "Part two: search for the channel, open it, scroll its videos until the one you want, open its menu"),
    caption: "Part two: search for the channel, open its Videos tab and scroll until the video turns up.",
  },
  {
    image: yt("old-reorder-3", 1561, 1208, "Part three: Download video from its menu, tap View on the toast, and it is back at the top of Downloads"),
    caption: "Part three: download it again, and only then is it first. 10 taps across 11 screens in total.",
  },
];

const NEW_FLOWS = [
  {
    image: yt("new-swipe", 996, 984, "Redesigned Downloads: slide a video to the left to reveal a delete button, then tap it"),
    caption: "Swipe to delete: slide a video left, tap the bin. 2 taps, on the list itself.",
  },
  {
    image: yt("new-select-1", 2212, 1188, "Redesigned multi-select: open the menu, choose Select from the drawer, tick several videos, open the menu on top and tap Delete"),
    caption: "Select to delete, part one: Select from the drawer, tick as many videos as you like, Delete from the menu on top.",
  },
  {
    image: yt("new-select-2", 996, 1207, "Tap Done on top and the selected videos are gone from the list"),
    caption: "Part two: Done, and every selected video is gone. 5 taps across 4 screens, however many videos.",
  },
  {
    image: yt("new-reorder-1", 1696, 1188, "Redesigned reorder: open the menu, tap Edit, hold a video card and drop it at the top"),
    caption: "Drag to reorder, part one: Edit from the menu, then hold a video and drop it where it belongs.",
  },
  {
    image: yt("new-reorder-2", 996, 1207, "Tap Done and the video sits at the top of the downloads list"),
    caption: "Part two: Done, and the video is first. 4 taps across 3 screens, down from 10 across 11.",
  },
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
        chapters={["Context", "The problem", "Process", "Current flow", "The solution", "Outcome"]}
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
          <Figure
            image={NEW_FLOWS[0].image}
            priority
            canvasClassName="md:px-24 lg:px-56"
            caption="Swipe to delete, from the redesign: slide a download left and tap the bin, without leaving the list."
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
        <div id="persona" className="mt-12 scroll-mt-24">
          <Persona />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Figure
            image={yt("empathy", 918, 922, "Empathy map built from the interviews: what commuters say, think, do and feel about YouTube downloads")}
            caption="The empathy map from the interviews and survey."
          />
          <Figure
            image={yt("persona", 1384, 1149, "Persona board for Haikal: main goal, scenario, personality, frustrations and the tools he uses")}
            caption="Haikal's persona board: the goal, the commute, and what wears him down."
          />
        </div>
      </CaseSection>

      <CaseSection label="Current flow" title="What it takes today, tap by tap." tone="alt">
        <Body>
          Before designing anything, I traced the two jobs people complained about most through the app as
          it ships, counting every tap and every screen.
        </Body>
        <div className="mt-10">
          <FigureStack items={OLD_FLOWS} />
        </div>
      </CaseSection>

      <CaseSection label="The solution" title="Swipe to delete, drag to reorder.">
        <Body>
          Two ways to delete, depending on the situation: swipe a single video away in place, or switch
          to multi-select to clear several at once instead of repeating the same flow one video at a time.
          Reordering became drag-and-drop directly in the list, instead of routing through a separate
          screen for every move. The tap counts further down are the result.
        </Body>
        <div className="mt-10">
          <FigureStack items={NEW_FLOWS} />
        </div>
        <div className="mt-10">
          <Figure
            image={yt("components", 815, 668, "The component set: thumbnails, the video row in normal and edit mode, checkboxes, the Select drawer, and the Delete and Edit menus")}
            canvasClassName="md:px-24 lg:px-48"
            caption="The handful of components every new screen is built from: the video row in normal and edit mode, the checkbox, the drawer and the two menus."
          />
        </div>
      </CaseSection>

      <CaseSection label="Outcome" title="A proposal, with the numbers behind it." tone="alt">
        <Comparison
          rows={TAPS}
          note="Step counts mapped directly from the existing flow against the redesigned one, not estimates."
        />
        <div className="mt-8">
          <Body>
          This was a proposal, not a shipped feature. YouTube doesn&apos;t take outside redesigns, and I
          don&apos;t have adoption numbers to report. What it did do: turn a recurring commute annoyance
          into a fully scoped problem with real numbers behind it, and confirm through other commuters
          that the friction wasn&apos;t just in my head.
          </Body>
        </div>
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
