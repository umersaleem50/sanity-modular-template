import { motion } from "motion/react";
import { ANIMATION_DURATION, INITIAL_Y_OFFSET } from "@/Devdata/constant";
import NonAnimated from "./NonAnimated";

type SectionTextProps = {
  classNameH2?: string;
  classNameP?: string;
  title: string;
  description: string;
  animated?: boolean;
};

export default function SectionText({
  classNameH2,
  classNameP,
  title,
  description,
  animated = true,
}: SectionTextProps) {
  if (!animated) return <NonAnimated title={title} description={description} />;
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
      transition={{ duration: ANIMATION_DURATION }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2
        className={`mb-4 text-3xl font-bold text-foreground lg:text-4xl ${classNameH2 ?? ""}`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto max-w-2xl text-lg text-foreground/70 ${classNameP ?? ""}`}
      >
        {description}
      </p>
    </motion.div>
  );
}
