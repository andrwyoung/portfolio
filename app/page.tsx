"use client";

import { useEffect, useState } from "react";
import { ProjectPreview } from "./project-preview";
import {
  ACTIVE_PROJECTS,
  ALL_PROJECTS,
  projectStyles,
  ProjectType,
} from "@/config-files/project-styles";
import { FaGithub, FaLinkedin, FaXmark } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon } from "@/components/social-icon";
import FillingDot from "@/components/filled-dot";
import { NewsletterForm } from "@/components/newsletter";
import { projectImages } from "@/config-files/project-images";
import Image from "next/image";
import SubtitleTooltip from "@/components/subtitle-tooltip";

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

        <p
          className={`mb-4 max-w-sm text-sm ${
            active ? "text-right" : "text-center"
          } ${activeFontBody} `}
        >
          I like to learn and build things. From sewing my tent to building a
          startup. Come for the journey!
        </p>

        {/* Project buttons */}

        <p
          className={`text-xs mb-2 font-semibold ${active ? "" : "underline"}`}
        >
          Open a Chapter:
        </p>
        <div
          className={`flex flex-col mb-12  ${
            active ? "items-end" : "items-center mr-2"
          }`}
        >
          {ACTIVE_PROJECTS.map((project) => {
            const isActive = active === project;
            const style = projectStyles[project];

            return (
              <SubtitleTooltip
                key={project}
                label={style.subtitle}
                onClick={() =>
                  setActive((prev) => (prev === project ? null : project))
                }
                header={style.header}
                disabled={active !== null}
              >
                <FillingDot
                  color={style.colors.accent}
                  borderColor={style.colors.border}
                  selected={isActive}
                />
                <div className="flex flex-col">
                  <div
                    className={`text-md w-fit transition-all cursor-pointer
                  rounded-lg font-header duration-300 flex items-center gap-1.5
                    ${isActive ? "underline underline-offset-2" : ""}
                `}
                  >
                    {style.header}
                  </div>
                </div>
              </SubtitleTooltip>
            );
          })}
        </div>

        <div className="flex gap-2 items-center mb-4">
          <NewsletterForm />
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
      </div>

      {/* Preload all the header images */}
      {ALL_PROJECTS.map((project) => {
        const { src, alt, width, height } = projectImages[project].header_image;
        return (
          <Image
            key={project}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={false} // don't block other layout
            style={{ display: "none" }}
          />
        );
      })}

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
