"use client";

import { useState } from "react";
import { ProjectPreview } from "./project-preview";
import { projectStyles, ProjectType } from "@/types/project-styles";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon } from "@/components/social-icon";
import FillingDot from "@/components/filled-dot";

export default function Home() {
  const [active, setActive] = useState<ProjectType | null>(null);
  const activeFontHeader = active
    ? projectStyles[active].fonts.header
    : "font-header";

  const activeFontBody = active
    ? projectStyles[active].fonts.body
    : "font-body";

  const activeHoverColor = active
    ? projectStyles[active]?.colors?.hover || ""
    : "hover:text-secondary";

  // const activeSelectedColor = active
  //   ? projectStyles[active]?.colors?.selected || ""
  //   : "";

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row  text-stone-700">
      {/* Left side: static nav */}
      <div
        className={`
      flex flex-col items-center justify-center p-8
      ${active ? "w-3/8 items-end justify-between" : "w-full"}
    `}
      >
        {/* Name + Links */}
        <h1
          className={`text-5xl ${activeFontHeader} mb-2 transition-all duration-200
          select-none ${active ? `cursor-pointer ${activeHoverColor}` : ""} ${
            active === "concaly" ? "font-medium" : ""
          }`}
          onClick={() => setActive(null)}
        >
          Andrew Yong
        </h1>
        <p className={`text-md mb-8 ${activeFontBody}`}>
          I code and design products from 0 to 1
        </p>

        {/* Project buttons */}
        <p
          className={`text-xs mb-4 font-semibold ${active ? "" : "underline"}`}
        >
          Choose a project:
        </p>
        <div
          className={`flex flex-col gap-2 mb-12 -translate-x-[1px] ${
            active ? "items-end" : "items-center"
          }`}
        >
          {(["concaly", "mudboard", "inquiryon"] as const).map((project) => {
            const isActive = active === project;
            const style = projectStyles[project];

            return (
              <div
                key={project}
                className="flex gap-2 items-center group cursor-pointer"
                title={`View ${style.header}`}
                onClick={() =>
                  setActive((prev) => (prev === project ? null : project))
                }
              >
                <FillingDot
                  color={style.colors.accent}
                  borderColor={style.colors.border}
                  selected={isActive}
                />
                <button
                  type="button"
                  className={`text-md w-fit transition-all cursor-pointer
                  rounded-lg font-header duration-300 
                    ${isActive ? "underline underline-offset-2" : ""}
                `}
                >
                  {style.header}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 items-center mb-1">
          <SocialIcon
            href="mailto:yong.andrew11@gmail.com"
            title="Email"
            icon={<MdEmail className="size-6" />}
            className={activeHoverColor}
          />
          <SocialIcon
            href="https://github.com/andrwyoung"
            title="GitHub"
            icon={<FaGithub className="size-5.5" />}
            className={activeHoverColor}
          />
          <SocialIcon
            href="https://linkedin.com/in/andrwyoung"
            title="LinkedIn"
            icon={<FaLinkedin className="size-5.5" />}
            className={activeHoverColor}
          />
        </div>
        <div className="flex flex-row gap-2 font-header text-sm">
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
        </div>
      </div>

      {/* Right side: dynamic project preview */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div key={active} className={`w-5/8`}>
            <ProjectPreview active={active} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
