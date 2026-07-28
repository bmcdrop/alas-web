import { cn } from "@/lib/utils";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-wood-dark">
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <RevealText as="h2" className="font-serif text-display-md font-normal text-ink text-balance">
        {title}
      </RevealText>
      {description && (
        <FadeIn delay={0.15}>
          <p className="mt-5 text-lg leading-relaxed text-warmgray-dark">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
