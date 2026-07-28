"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "invert" | "outline-dark";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className,
  external,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coffee";

  const styles = {
    primary: "bg-coffee text-warmwhite hover:bg-coffee-dark",
    secondary:
      "bg-transparent text-current border border-current/30 hover:border-current/70",
    ghost: "bg-white/10 text-warmwhite backdrop-blur-md border border-white/25 hover:bg-white/20",
    invert: "bg-warmwhite text-coffee-dark hover:bg-wood-light",
    "outline-dark": "bg-transparent text-ink border border-ink/20 hover:border-ink/50",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(base, styles[variant], className)}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
