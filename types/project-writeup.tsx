import {
  FaBook,
  FaBookSkull,
  FaBoxesStacked,
  FaCalendarDay,
  FaCloudShowersWater,
  FaGasPump,
  FaHammer,
  FaImages,
  FaLeaf,
  FaMountainSun,
  FaPaintRoller,
  FaPencil,
  FaSkull,
  FaTree,
} from "react-icons/fa6";
import type { ProjectType } from "./project-styles";
import { InlineLinkListItem } from "@/components/hyperlink";
import { FaEdit, FaMapMarkerAlt, FaPaintBrush } from "react-icons/fa";

export const projectContent: Record<
  ProjectType,
  {
    what: React.ReactNode;
    why: React.ReactNode;
    previewSections: {
      title: string;
      icon?: React.ReactNode;
      content: React.ReactNode;
    }[];
    columns?: number; // default is 1
    screenshots?: { src: string; alt: string }[];
  }
> = {
  concaly: {
    what: (
      <p>
        Concaly is a <strong>convention planning tool</strong> for artists to
        find conventions and organize deadlines. It has filtering, search, a
        custom built CMS + admin panel, calendar, and map. I designed and built
        the app in 5 weeks — a month after picking up React.
      </p>
    ),
    why: (
      <>
        <p>
          Building ConCaly marked my return to coding, and a fast track into
          frontend dev and UI/UX. I had to <strong>learn a lot</strong> quickly
          (and boy did I learn), but the tools felt light and familiar.
        </p>

        <p className="mt-4">
          Yet, as much as I learned from building, the hardest part of this
          project was actually <strong>letting go</strong>. I had early traction
          — people were interested, helping, and giving feedback.
        </p>
        <p className="mt-4">
          But just as things picked up, I saw how much more potential{" "}
          <strong>Mudboard</strong> had. I had to make the call to give up
          something good to <strong>pursue something great</strong>. It wasn't
          easy, but it taught me about prioritization, sacrifice, and
          acknowledging my limits.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Other Links",
        icon: <FaEdit className="size-5" />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Learnings Write-up"
              links={[
                "https://jondrew.notion.site/ConCaly-Writeup-1e72e809fa4e80f7b714c8f6cf848809?source=copy_link",
              ]}
              accentClass="text-concaly-secondary-darker"
            />
            <InlineLinkListItem
              label="DevLog"
              links={[
                "https://jondrew.notion.site/1d12e809fa4e80f8a0c0eead1477afd8?v=1d12e809fa4e8060996d000c68b22fb2&source=copy_link",
              ]}
              accentClass="text-concaly-secondary-darker"
            />
            <InlineLinkListItem
              label="Loom Video Demo"
              links={[
                "https://www.loom.com/share/8f9b7fa2c2c346adac5720249d4fb79a?sid=318c6f84-30f1-49ea-ada9-9327cac99ee4",
              ]}
              accentClass="text-concaly-secondary-darker"
            />
            <InlineLinkListItem
              label="Github"
              links={["https://github.com/andrwyoung/con-app"]}
              accentClass="text-concaly-secondary-darker"
            />
            <InlineLinkListItem
              label="Figma (Original Design)"
              links={[
                "https://www.figma.com/design/M9GYa5tcarEDOCRDmONnZz/Convention-Searcher?node-id=0-1&t=TnlcqTw0QVP75NLy-1",
              ]}
              accentClass="text-concaly-secondary-darker"
            />
          </ul>
        ),
      },
      {
        title: "Timeline",
        icon: <FaCalendarDay />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - <span className="font-semibold">W1:</span> Roadmap, Auth, Schema
            </li>
            <li>
              - <span className="font-semibold">W2:</span> Mapbox, Search
            </li>
            <li>
              - <span className="font-semibold">W3:</span> Filtering, UI polish
            </li>
            <li>
              - <span className="font-semibold">W4:</span> Calendar + List logic
            </li>
            <li>
              - <span className="font-semibold">W5:</span> Mobile, CMS, Writeups
            </li>
            <li>
              - <span className="font-semibold">W6-9:</span> Feedback loops.
              Pivoted.
            </li>
          </ul>
        ),
      },
      {
        title: "Stack",
        icon: <FaMapMarkerAlt />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - Map: <span className="font-semibold">Mapbox</span>
            </li>
            <li>
              - Data Gathering: <span className="font-semibold">Python</span>
            </li>
            <li>
              - Database and Auth:{" "}
              <span className="font-semibold">Supabase</span>
            </li>
            <li>
              - Frontend + Backend:{" "}
              <span className="font-semibold">Next.js</span>
            </li>
            <li>
              - Hosting: <span className="font-semibold">Vercel</span>
            </li>
          </ul>
        ),
      },
    ],
    screenshots: [
      { src: "/concaly/1.png", alt: "Map view" },
      { src: "/concaly/3.png", alt: "Calendar view" },
      { src: "/concaly/2.png", alt: "Selected Con" },
      { src: "/concaly/5.png", alt: "Edit Artist Alley Panel" },
      { src: "/concaly/4.png", alt: "Edit Convention Info Panel" },
      { src: "/concaly/6.png", alt: "Suggestions/Updates page" },
    ],
  },

  mudboard: {
    what: (
      <p>
        In 2024, I started building <strong>Mudboard</strong> — a moodboarding
        tool for artists who think in images, not files. I wanted something that
        felt fast, tactile, and fluid. A space where I could drag in references,
        sketch ideas, and rearrange everything until it made sense. Traditional
        tools felt clunky or weren’t built for visual thinkers. So I made my
        own.
      </p>
    ),
    why: (
      <>
        <p>
          I built Mudboard because most moodboarding tools aren’t made for how
          artists actually think. They're either rigid (grids, folders, pins) or
          bloated with features meant for product teams. I wanted something that
          felt fast, fluid, and spatial — a tool that gets out of the way so
          artists can stay in flow.
        </p>
        <p className="mt-4">
          But I also kept coming back to one missing piece: reuse. I didn’t just
          want a canvas — I wanted to build a system. A way to save and remix
          reference packs, share curated sections with others, and treat
          moodboarding as an evolving creative language. That’s the vision for
          Mudboard.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Extra Links",
        icon: <FaPaintBrush />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Decision Making"
              links={[
                "https://jondrew.notion.site/Mudboard-Writeup-1ff2e809fa4e80edb3d0cda40d499e4f?source=copy_link",
              ]}
              accentClass="text-mudboard-accent"
            />
            <InlineLinkListItem
              label="Interest Form"
              links={["https://www.mudboard.com/get-involved"]}
              accentClass="text-mudboard-accent"
            />
          </ul>
        ),
      },
      {
        title: "Progress",
        icon: <FaLeaf />,
        content: (
          <ul className="space-y-0.5">
            <li>- MVP built and launched</li>
            <li>- Iterated through multiple testing rounds</li>
            <li>- Strong early response</li>
            <li>- Steady unprompted usage</li>
            <li>- Moving into monetization</li>
          </ul>
        ),
      },
      {
        title: "Stack",
        icon: <FaImages />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - Drag and Drop: <span className="font-semibold">Dnd Kit</span>
            </li>
            <li>
              - Database and Auth:{" "}
              <span className="font-semibold">Supabase</span>
            </li>
            <li>
              - Frontend + Backend:{" "}
              <span className="font-semibold">Next.js</span>
            </li>
            <li>
              - Hosting: <span className="font-semibold">Vercel</span>
            </li>
          </ul>
        ),
      },
    ],
    screenshots: [
      { src: "/mudboard/0.png", alt: "Gallery View" },
      // { src: "/mudboard/1.png", alt: "Gallery View 2" },
      { src: "/mudboard/2.png", alt: "Overlay Gallery View" },
      { src: "/mudboard/3.png", alt: "Dashboard" },
      { src: "/mudboard/4.png", alt: "Split Screen" },
      { src: "/mudboard/5.png", alt: "Landing Page" },
    ],
  },
  pct: {
    what: (
      <p>
        In the summer of 2024, I thru-hiked the{" "}
        <strong>Pacific Crest Trail</strong> — a 2650 mile journey from Mexico
        to Canada. I walked through the desert, slept in thunderstorms, forded
        rivers and climbed the tallest peak in the continental US. I also sewed
        the backpack, sleeping bag and tent that got me through the hike.
      </p>
    ),
    why: (
      <>
        <p>There were 2 things that really stuck with me:</p>
        <ol className="list-decimal list-inside space-y-2 py-2">
          <li>
            <strong>I can do hard things</strong>. The hike was hard in more
            ways than one — from rats chewing through my gear to running low on
            water. I was scared, lonely and in pain many days. I didn't have
            confidence, <strong>yet I still did it</strong>.
          </li>
          <li>
            <strong>I'm not in control</strong>. I spent so much time worrying
            about food resupplies, river crossings, and fires. Yet, as big as
            those problems are, it's <strong>out of my hands</strong>. I can
            only move forward. And strangely enough, things tended to work out.
          </li>
        </ol>
        <p className="pt-4">
          I think what I really learned was courage: moving forward despite
          fear, and letting go of control when nothing felt certain. I didn’t
          come off trail feeling more confident or self-assured. But I did learn
          how to keep going anyway.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Stats",
        icon: <FaTree />,
        content: (
          <ul className="">
            <li>- Longest day: 42.6 mi</li>
            <li>- Total days: 105 days</li>
            <li className="flex flex-col w-fit">
              - Marathon days (26.2+ mi): 24
              <span className="text-xs px-4 text-neutral-500">
                (longest streak: 6 days)
              </span>
            </li>
            <li>- Hitchhikes: 19</li>
            <li>- Bears: 0</li>
          </ul>
        ),
      },

      {
        title: "Gear",
        icon: <FaCloudShowersWater />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="How I sewed my gear"
              links={[
                "https://jondrew.notion.site/Sewing-Gear-19b2e809fa4e801192f0c21c806f1605",
              ]}
              accentClass="text-pct-accent"
            />
            <InlineLinkListItem
              label="Full Gear breakdown"
              links={[
                "https://docs.google.com/spreadsheets/d/1Fc8pnEkADU9mpBzUXr92X5dH3Zhp9lKf_4nuR_rWyZY/edit?gid=0#gid=0",
              ]}
              accentClass="text-pct-accent"
            />
          </ul>
        ),
      },
      {
        title: "Reflections",
        icon: <FaMountainSun />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Daily Hiker Log"
              links={[
                "https://docs.google.com/spreadsheets/d/1vvdS_cpu703A6ODHuChUXefpH1-JA6VGIaMkT5ZDjHY/edit?gid=0#gid=0",
              ]}
              accentClass="text-pct-accent"
            />
            <InlineLinkListItem
              label="Newsletter during the hike"
              links={[
                "https://blog.jonadrew.com/posts/wwn-pacific-crest-trail-8",
              ]}
              accentClass="text-pct-accent"
            />
            <InlineLinkListItem
              label="After-hike reflection"
              links={["https://medium.com/@andrwyoung/p-7544392c4daf"]}
              accentClass="text-pct-accent"
            />
          </ul>
        ),
      },
    ],
    columns: 2,
    screenshots: [
      { src: "/pct/1.webp", alt: "Washington" },
      { src: "/pct/2.webp", alt: "California. Silver Lake" },
      { src: "/pct/3.webp", alt: "Sierras. Forrester Pass" },
      { src: "/pct/4.webp", alt: "Sierras" },
      { src: "/pct/5.webp", alt: "Oregon" },
      { src: "/pct/8.webp", alt: "Sierras" },
      { src: "/pct/6.webp", alt: "Sierras" },
      { src: "/pct/7.webp", alt: "Oregon" },
      { src: "/pct/IMG_5756.webp", alt: "Oregon" },
      { src: "/pct/IMG_5803.webp", alt: "Oregon" },
      { src: "/pct/IMG_5933.webp", alt: "Oregon" },
      { src: "/pct/9.webp", alt: "Washington. Mount Rainer" },
    ],
  },
  jonadrew: {
    what: (
      <p>
        In September of 2022, I left my high-paying software job to pursue{" "}
        <strong>illustration full-time</strong>. In the process, I learned
        everything I didn’t know about publishing, client work, marketing, and
        running a business. I illustrated book covers, worked on board games,
        tabled at conventions, and created comics.
      </p>
    ),
    why: (
      <>
        <p>
          I left my job because of the desire for freedom, and the dread of a
          life I would have lived if I stayed. But I quickly learned how steep
          the cost of freedom was.
        </p>
        <p className="mt-4">
          I imagined I would be drawing all day. Instead, I was cold-emailing
          publishers, digging through Facebook groups and learning that sales,
          not skills alone, is what moves the needle.
        </p>

        <p className="mt-4">
          And by all external measures I'm not very successful. I made little
          money and my follower count is underwhelming, yet I'm{" "}
          <strong>so happy and proud</strong> of myself for{" "}
          <strong>just trying</strong> and taking that leap. That's successful
          to me. And who knows, maybe the rest will catch up eventually.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Drawings Stats",
        icon: <FaPencil />,
        content: (
          <ul className="space-y-0.5">
            <li>- Drawing reps: over 8,000</li>
            <li>- Comissions: ~50 clients</li>
            <li>
              - Revenue: <FaSkull className="inline" />
            </li>
          </ul>
        ),
      },
      {
        title: "Works Published",
        icon: <FaBook />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Book cover set"
              links={[
                "https://www.kickstarter.com/projects/benwolf/two-kids-books-series-from-award-winning-author-ben-wolf",
              ]}
              accentClass="text-jonadrew-secondary"
            />
            <InlineLinkListItem
              label="Call of Poohthulu"
              links={[
                "https://www.kickstarter.com/projects/1155362758/the-call-of-pooh-thulhu-cthulhu-comes-to-the-100-acre-woods",
              ]}
              accentClass="text-jonadrew-secondary"
            />

            <li>- Graphic Novel (Coming soon)</li>
          </ul>
        ),
      },

      {
        title: "Tools",
        icon: <FaPaintRoller />,
        content: (
          <ul className="space-y-0.5">
            <li className="flex flex-col w-fit">
              - Clip Studio Paint Ex
              <span className="text-xs px-4 text-neutral-500">
                (In the past have used Procreate, Photoshop and Krita)
              </span>
            </li>
            <li>- Huion Kamvas Pro 16</li>
            <li>- Normal pencil + paper</li>
          </ul>
        ),
      },
    ],
    columns: 3,
    screenshots: [
      { src: "/jonadrew/4-26c.webp", alt: "Close-up portrait with brown eyes" },
      { src: "/jonadrew/9-25.webp", alt: "Still life of a cracked open egg" },
      { src: "/jonadrew/9-26.webp", alt: "Glass of water study with shadow" },
      {
        src: "/jonadrew/9-26b.webp",
        alt: "Tangerine segments in warm lighting",
      },
      {
        src: "/jonadrew/9-26c.webp",
        alt: "Lemon slices on fabric in soft lighting",
      },

      {
        src: "/jonadrew/9-26f.webp",
        alt: "Still life of cracked egg with shell fragments",
      },
      {
        src: "/jonadrew/9-26g.webp",
        alt: "Egg yolk balanced between chopsticks",
      },
      {
        src: "/jonadrew/4-26b.webp",
        alt: "Portrait of woman in bandana looking upward",
      },
      {
        src: "/jonadrew/9-26h.webp",
        alt: "Spoon of honey dripping into a jar",
      },
      {
        src: "/jonadrew/9-27b copy.webp",
        alt: "Digital rendering of a faceted crystal gem",
      },
      {
        src: "/jonadrew/10-2 try 2.webp",
        alt: "Portrait of a bird with strong lighting",
      },
      {
        src: "/jonadrew/4-26.webp",
        alt: "Portrait of a girl with a neutral expression",
      },
      {
        src: "/jonadrew/10-2.webp",
        alt: "Digital rendering if toast!",
      },
      {
        src: "/jonadrew/9-26e.webp",
        alt: "Digital rendering of side profile of a hawk",
      },
    ],
  },
};
