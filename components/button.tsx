import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition",
    variant === "primary" && "bg-brand text-white shadow-soft hover:bg-ember",
    variant === "secondary" && "border border-ink/15 bg-white text-ink hover:border-brand hover:text-brand",
    variant === "ghost" && "text-ink hover:bg-blush",
    className
  );

  if (href?.startsWith("http")) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href ?? "#"}>
      {children}
    </Link>
  );
}
