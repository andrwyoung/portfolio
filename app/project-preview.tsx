import { motion } from "framer-motion";
import { DesignSpec } from "./design-spec";
import { projectStyles, ProjectType } from "@/types/project-styles";
import { Button } from "@/components/button";

export function ProjectPreview({ active }: { active: ProjectType }) {
  const style = projectStyles[active];

  if (!style) return null;

  return (
    <motion.div
      className={`w-full h-full p-8 ${style.colors.background} ${style.colors.text} ${style.fonts.body}`}
    >
      {/* <h2 className={`text-3xl mb-4 ${style.fonts.header}`}>{style.header}</h2> */}
      <p className={`text-4xl mb-4 ${style.fonts.logo}`}>{style.header}</p>
      <p className="mb-8">This is a themed preview of the {active} project.</p>
      <Button variant={active}>Live Site</Button>
      <DesignSpec activeProject={active} />
    </motion.div>
  );
}
