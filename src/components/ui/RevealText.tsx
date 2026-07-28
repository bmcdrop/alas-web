"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Clips and reveals a block of text/heading upward, like a curtain lifting.
 * Use for headlines to create an editorial "text reveal" feel.
 */
export default function RevealText({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={cn("block", className)}
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        <Tag className="m-0">{children}</Tag>
      </motion.span>
    </span>
  );
}
