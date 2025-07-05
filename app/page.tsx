"use client";

import { useEffect, useState } from "react";
import { ProjectPreview } from "./project-preview";
import { projectStyles, ProjectType } from "@/types/project-styles";
import { FaGithub, FaLinkedin, FaXmark } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon } from "@/components/social-icon";
import FillingDot from "@/components/filled-dot";
import { NewsletterForm } from "@/components/newsletter";

export default function Home() {
  const [active, setActive] = useState<ProjectType | null>(null);
  // const activeFontHeader = active
  //   ? projectStyles[active].fonts.header
  //   : "font-header";
  const activeFontHeader = "font-header";

  // const activeFontBody = active
  //   ? projectStyles[active].fonts.body
  //   : "font-body";
  const activeFontBody = "font-body";

  const activeHoverColor = active
    ? projectStyles[active]?.colors?.hover || ""
    : "hover:text-secondary";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-row  text-stone-700">
      {/* Left side: static nav */}
      <div
        className={`
          flex-col items-center justify-center p-8
          ${
            active
              ? "hidden md:flex w-3/8 items-end justify-between"
              : "flex  w-full"
          }
          `}
      >
        {/* Name + Links */}
        <h1
          className={`text-4xl sm:text-4xl md:text-5xl ${activeFontHeader} mb-2 transition-all duration-200
          select-none ${
            active
              ? `cursor-pointer text-right ${activeHoverColor}`
              : "text-center"
          } ${
            active === "concaly" || active === "jonadrew" ? "font-medium" : ""
          }`}
          onClick={() => setActive(null)}
        >
          Andrew Yong
        </h1>
        {/* <p className={`text-md mb-0.5 ${activeFontBody}`}>
          I like building and learning across disciplines.
        </p> */}
        <p
          className={`mb-4 max-w-sm text-sm ${
            active ? "text-right" : "text-center"
          } ${activeFontBody} `}
        >
          I&apos;ve coded + designed products, and walked across the country.
          Come along for the journey to see what&apos;s next:
        </p>

        <div className="flex gap-2 items-center mb-10">
          <NewsletterForm />
        </div>

        {/* Project buttons */}

        <p
          className={`text-xs mb-2 font-semibold ${active ? "" : "underline"}`}
        >
          Open a Chapter:
        </p>
        <div
          className={`flex flex-col gap-2 mb-12 -translate-x-[1px] ${
            active ? "items-end" : "items-center"
          }`}
        >
          {(["mudboard", "concaly", "pct", "jonadrew"] as const).map(
            (project) => {
              const isActive = active === project;
              const style = projectStyles[project];

              return (
                <button
                  key={project}
                  type="button"
                  data-umami-event={`${project} Button Clicked`}
                  className="flex gap-2 items-center group cursor-pointer hover:underline"
                  title={`Open Chapter: ${style.header}`}
                  onClick={() =>
                    setActive((prev) => (prev === project ? null : project))
                  }
                >
                  <FillingDot
                    color={style.colors.accent}
                    borderColor={style.colors.border}
                    selected={isActive}
                  />
                  <div
                    className={`text-md w-fit transition-all cursor-pointer
                  rounded-lg font-header duration-300 
                    ${isActive ? "underline underline-offset-2" : ""}
                `}
                  >
                    {style.header}
                  </div>
                </button>
              );
            }
          )}
        </div>

        <div className="flex gap-4 items-center mb-1">
          <SocialIcon
            href="mailto:yong.andrew11@gmail.com"
            title="Send email to Andrew"
            icon={<MdEmail className="size-6" />}
            className={activeHoverColor}
          />
          <SocialIcon
            href="https://github.com/andrwyoung/portfolio"
            title="Visit Andrew's GitHub"
            icon={<FaGithub className="size-5.5" />}
            className={activeHoverColor}
          />
          <SocialIcon
            href="https://linkedin.com/in/andrwyoung"
            title="Visit Andrew's LinkedIn"
            icon={<FaLinkedin className="size-5.5" />}
            className={activeHoverColor}
          />
        </div>
        {/* <div className="flex flex-row gap-2 font-header text-sm">
          <a
            href="https://www.jonadrew.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer transition opacity-60 hover:opacity-100 ${activeHoverColor}`}
          >
            Illustration
          </a>
          <a
            href="https://blog.jonadrew.com/profile"
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer transition opacity-60 hover:opacity-100 ${activeHoverColor}`}
          >
            Blog
          </a>
        </div> */}
      </div>

      {/* Right side: dynamic project preview */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div key={active} className={`w-full md:w-5/8`}>
            {/* Close button for mobile */}
            <button
              className="fixed top-4 right-4  z-100 
              bg-white/40 cursor-pointer p-1 rounded-lg
              text-neutral-800/80 hover:text-neutral-700"
              onClick={() => setActive(null)}
              aria-label="Close Preview"
              title="Close Preview"
            >
              <FaXmark className="size-5" />
            </button>

            <ProjectPreview active={active} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
