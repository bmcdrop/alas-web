"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
};

export default function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
}: FadeInProps) {
  const viewport = { once: true, margin: "-10% 0px -10% 0px" as const };
  const shared = {
    className: cn(className),
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport,
    variants,
    transition: { delay },
  };

  if (as === "span") {
    return <motion.span {...shared}>{children}</motion.span>;
  }
  if (as === "li") {
    return <motion.li {...shared}>{children}</motion.li>;
  }
  return <motion.div {...shared}>{children}</motion.div>;
}
