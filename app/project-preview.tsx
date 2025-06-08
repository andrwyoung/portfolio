import { motion } from "framer-motion";
import { DesignSpec } from "../components/design-spec";
import { projectStyles, ProjectType } from "@/types/project-styles";
import { Button } from "@/components/button";
import Concaly from "@/components/projects/concaly";
import Mudboard from "@/components/projects/mudboard";
import Inquiryon from "@/components/projects/inquiryon";
import Image from "next/image";

const previews = {
  concaly: Concaly,
  mudboard: Mudboard,
  inquiryon: Inquiryon,
};

export function ProjectPreview({ active }: { active: ProjectType }) {
  const style = projectStyles[active];
  const Component = previews[active];

  if (!style) return null;

  return (
    <motion.div
      className={`w-full h-full p-8 ${style.colors.background} ${style.colors.text} ${style.fonts.body}`}
    >
      {/* <h2 className={`text-3xl mb-4 ${style.fonts.header}`}>{style.header}</h2> */}
      <div className="flex justify-between">
        <div className={`text-4xl mb-4 ${style.fonts.logo}`}>
          {style.header}
        </div>
        <Image
          src={style.logo_src}
          alt={`${style.header} Logo`}
          width={512}
          height={512}
          className="w-[32px] h-[32px]"
        />
      </div>
      <Button variant={active} className={`mb-8 ${style.fonts.header} `}>
        Go to Live Site
      </Button>
      <Component />
      <DesignSpec activeProject={active} />
    </motion.div>
  );
}
