import { DesignSpec } from "../components/design-spec";
import { projectStyles, ProjectType } from "@/config-files/project-styles";
import { Button } from "@/components/button";
import { projectContent } from "@/config-files/project-writeup";
import { FaLink } from "react-icons/fa6";
import { projectImages } from "@/config-files/project-images";
import { BlurhashImage } from "@/components/blurhashed-image";

export function ProjectPreview({ active }: { active: ProjectType }) {
  const style = projectStyles[active];
  const content = projectContent[active];
  const images = projectImages[active];

  const sections = [
    {
      title: `Overview`,
      content: content.what,
      className: `text-2xl `,
    },
    {
      title: "Learnings",
      content: content.why,
      className: "text-2xl",
    },
  ];

  if (!style) return null;

  return (
    <div
      className={`w-full h-full py-8 px-6 sm:px-10 md:px-12 pb-32 ${
        style.colors.background
      } ${style.colors.text} ${style.fonts.body} ${
        active === "pct" && "text-[1.0625rem] leading-normal"
      }  overflow-y-auto 
      scrollbar-thin scrollbar-track-transparent relative`}
    >
      {/* <h2 className={`text-3xl mb-4 ${style.fonts.header}`}>{style.header}</h2> */}
      <div className="flex gap-8 items-center mb-8 ">
        {/* {style.logo_src && (
          <Image
            src={style.logo_src}
            alt={`${style.header} Logo`}
            width={512}
            height={512}
            className="w-[24px] h-[24px]"
          />
        )} */}
        <a
          href={style.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-4xl ${style.fonts.logo} ${style.colors.hover} transition-all hover:scale-105 duration-200
          `}
          title={style.link_accessible_cta}
          aria-label={style.link_accessible_cta}
        >
          {style.header}
        </a>
      </div>

      <BlurhashImage
        image={images.header_image}
        className={`rounded-lg shadow mb-12 
        `}
        priority
      />

      <div className={``}>
        <div className={`max-w-xl space-y-6 mb-12`}>
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

        <div className=" mb-12">
          <a
            href={style.link}
            target="_blank"
            rel="noopener noreferrer"
            title={style.link_accessible_cta}
            aria-label={style.link_accessible_cta}
            className="inline-block"
          >
            <Button
              type="button"
              variant={active}
              className={style.fonts.header}
              data-umami-event={`${style.header} Website Clicked`}
            >
              {style.link_cta}
            </Button>
          </a>
        </div>

        <section className="grid gap-y-12 lg:gap-y-2  gap-x-4 grid-cols-1 lg:grid-cols-3 mb-16">
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

        <div className="mt-4 mb-8 text-sm text-muted max-w-xl">
          <p className="flex flex-wrap items-center gap-1">
            Like this? I share more every other Wednesday —
            <span className="inline md:hidden">sign up on the homepage</span>
            <button
              type="button"
              title="Focus on Newsletter Signup Input"
              onClick={() => {
                const input = document.getElementById("newsletter-input");
                if (input) {
                  input.focus();
                }
              }}
              className={`cursor-pointer hidden md:inline transition-all duration-200 ${
                active === "concaly"
                  ? "text-concaly-secondary-darker"
                  : style.colors.icon
              } font-medium`}
            >
              sign up on the left
            </button>
          </p>
        </div>

        {images.screenshots && images.screenshots.length > 0 && (
          <section>
            <h2
              className={`flex items-center gap-2 text-xl mb-4 font-semibold ${style.fonts.header}`}
            >
              <span>Images</span>
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
            <div
              className={`columns-1   ${
                content.columns === 2 && "md:columns-2"
              } ${
                content.columns === 3 && "md:columns-2 xl:columns-3"
              } gap-4 space-y-4`}
            >
              {images.screenshots.map((shot, i) => (
                <BlurhashImage
                  key={i}
                  image={shot}
                  className={`mb-4 rounded-md shadow-sm ${
                    active === "mudboard" ? "mb-8" : "mb-4"
                  }`}
                  priority={i < 2} // priortiy load the first 2
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="hidden md:block">
        <DesignSpec activeProject={active} />
      </div>
    </div>
  );
}
