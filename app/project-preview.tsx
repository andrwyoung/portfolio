import { motion } from "framer-motion";
import { DesignSpec } from "../components/design-spec";
import { projectStyles, ProjectType } from "@/types/project-styles";
import { Button } from "@/components/button";
import Image from "next/image";
import { projectContent } from "@/types/project-writeup";
import { FaLink } from "react-icons/fa6";

export function ProjectPreview({ active }: { active: ProjectType }) {
  const style = projectStyles[active];
  const content = projectContent[active];

  const sections = [
    {
      title: `Overview`,
      content: content.what,
      className: `text-2xl `,
    },
    {
      title: "How did I grow?",
      content: content.why,
      className: "text-2xl",
    },
  ];

  if (!style) return null;

  return (
    <motion.div
      className={`w-full h-full py-8 px-12 ${style.colors.background} ${style.colors.text} ${style.fonts.body} overflow-y-auto 
      scrollbar-thin scrollbar-track-transparent relative`}
    >
      {/* <h2 className={`text-3xl mb-4 ${style.fonts.header}`}>{style.header}</h2> */}
      <div className="flex gap-8 items-center mb-4 ">
        {/* {style.logo_src && (
          <Image
            src={style.logo_src}
            alt={`${style.header} Logo`}
            width={512}
            height={512}
            className="w-[24px] h-[24px]"
          />
        )} */}
        <div className={`text-4xl ${style.fonts.logo}`}>{style.header}</div>
      </div>

      <div className=" mb-12">
        {style.link && (
          <a
            href={style.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant={active} className={style.fonts.header}>
              Go to Website
            </Button>
          </a>
        )}
      </div>

      <div className={``}>
        <div className={`max-w-xl space-y-6 mb-8`}>
          {sections.map(({ title, content, className }, i) => (
            <section key={i}>
              <h2
                className={` mb-1 ${className}
                  font-semibold
                ${style.fonts.header}`}
              >
                {title}
              </h2>
              <div className={style.fonts.body}>{content}</div>
            </section>
          ))}
        </div>

        <section className="grid gap-2 sm:grid-cols-3 mb-16">
          {content.previewSections.map(({ title, icon, content }) => (
            <div key={title}>
              <h3
                className={`flex items-center gap-2 text-lg mb-1 font-semibold ${style.fonts.header}`}
              >
                <p className={style.colors.icon}>{icon}</p> <p>{title}</p>
              </h3>
              <div>{content}</div>
            </div>
          ))}
        </section>

        {content.screenshots && content.screenshots.length > 0 && (
          <section>
            <h2
              className={`flex items-center gap-2 text-xl mb-4 font-semibold ${style.fonts.header}`}
            >
              <span>Photos</span>
              {style.photos_link && (
                <a
                  href={style.photos_link}
                  title={`More ${style.header} Pictures`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline hover:opacity-80 ${style.colors.icon}`}
                >
                  <FaLink />
                </a>
              )}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {content.screenshots.map((shot, i) => (
                <img
                  key={i}
                  src={shot.src}
                  alt={shot.alt}
                  className="rounded-lg shadow sm:col-span-1"
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <DesignSpec activeProject={active} />
    </motion.div>
  );
}
