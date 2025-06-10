// types/project-content.ts
import { FaPencil } from "react-icons/fa6";
import type { ProjectType } from "./project-styles";

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
        icon: "⚙️",
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
        icon: "⚙️",
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
        icon: "⚙️",
        content: <p>Supabase Something</p>,
      },
    ],
    screenshots: [
      { src: "/images/inquiryon-hero.png", alt: "Hero section" },
      { src: "/images/inquiryon-section.png", alt: "Detail view" },
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
