import {
  FaBookSkull,
  FaBoxesStacked,
  FaGasPump,
  FaPencil,
} from "react-icons/fa6";
import type { ProjectType } from "./project-styles";
import { InlineLinkListItem } from "@/components/hyperlink";

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
    screenshots?: { src: string; alt: string }[];
  }
> = {
  concaly: {
    what: (
      <p>
        Concaly is a convention planning tool for artists and vendors. It
        aggregates data for 2,000+ cons and helps users visualize deadlines,
        travel, and booth schedules on a responsive map and calendar.
      </p>
    ),
    why: (
      <p>
        Most con tracking tools are outdated, hard to navigate, or exist in
        spreadsheets. I built Concaly to offer a modern, centralized tool that
        scales with the growing con circuit and artist community needs.
      </p>
    ),
    previewSections: [
      {
        title: "Write-up",
        icon: <FaPencil />,
        content: (
          <a
            href="https://notion.so/concaly"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Read the full write-up →
          </a>
        ),
      },
      {
        title: "Role",
        icon: "🛠️",
        content: <p>Built it myself</p>,
      },
      {
        title: "Stack",
        icon: <FaBoxesStacked />,
        content: <p>Supabase Something</p>,
      },
    ],
    screenshots: [
      { src: "/images/concaly-calendar.png", alt: "Calendar view" },
      { src: "/images/concaly-map.png", alt: "Map view" },
      { src: "/images/concaly-modal.png", alt: "Edit modal view" },
    ],
  },

  mudboard: {
    what: (
      <p>
        Mudboard is a collaborative moodboarding tool for digital creators.
        Inspired by traditional collage but built for async creativity.
      </p>
    ),
    why: (
      <p>
        I wanted to build a tool where artists could visually brainstorm in
        shared boards — without the constraints of folders or grids.
      </p>
    ),
    previewSections: [
      {
        title: "Write-up",
        icon: <FaPencil />,
        content: (
          <a
            href="https://notion.so/concaly"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Read the full write-up →
          </a>
        ),
      },
      {
        title: "Role",
        icon: "🛠️",
        content: <p>Built it myself</p>,
      },
      {
        title: "Stack",
        icon: <FaBoxesStacked />,
        content: <p>Supabase Something</p>,
      },
    ],
    screenshots: [
      { src: "/images/mudboard-1.png", alt: "Board interface" },
      { src: "/images/mudboard-2.png", alt: "Collaboration in action" },
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
        title: "Reflections",
        icon: <FaPencil />,
        content: (
          <ul className="space-y-1">
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
            {/* <div className="mt-4" />
            <InlineLinkListItem
              label="Photos"
              links={[
                "https://www.flickr.com/photos/198687848@N05/albums/72177720319936619",
                "https://www.flickr.com/photos/198687848@N05/albums/72177720320026879",
                "https://www.flickr.com/photos/198687848@N05/albums/72177720320017892",
              ]}
              accentClass="text-pct-accent"
            /> */}
          </ul>
        ),
      },
      {
        title: "Gear",
        icon: <FaBookSkull />,
        content: (
          <ul className="space-y-1">
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
        title: "Stats",
        icon: <FaGasPump />,
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
    ],
    screenshots: [
      { src: "/pct/1.webp", alt: "Washington" },
      { src: "/pct/2.webp", alt: "California. Silver Lake" },
      { src: "/pct/3.webp", alt: "Sierras. Forrester Pass" },
      { src: "/pct/4.webp", alt: "Sierras" },
      { src: "/pct/5.webp", alt: "Oregon" },
      { src: "/pct/8.webp", alt: "Sierras" },
      { src: "/pct/6.webp", alt: "Sierras" },
      { src: "/pct/7.webp", alt: "Oregon" },
    ],
  },
  jonadrew: {
    what: (
      <p>
        Inquiryon is a landing page for a concept brand focused on research
        tools and ambient data visualization.
      </p>
    ),
    why: (
      <p>
        This was an exercise in design identity and motion — crafting a
        high-fidelity, expressive landing page that plays with grid and type.
      </p>
    ),
    previewSections: [
      {
        title: "Published",
        icon: <FaPencil />,
        content: (
          <a
            href="https://notion.so/concaly"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Read the full write-up →
          </a>
        ),
      },
      {
        title: "Drawings Done",
        icon: "🛠️",
        content: <p>Built it myself</p>,
      },
      {
        title: "Stack",
        icon: "⚙️",
        content: <p>Supabase Something</p>,
      },
    ],
    screenshots: [
      { src: "/images/inquiryon-hero.png", alt: "Hero section" },
      { src: "/images/inquiryon-section.png", alt: "Detail view" },
    ],
  },
};
