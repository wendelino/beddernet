import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function WidthWrapper({
  className,
  children,
  large = false,
}: {
  className?: string;
  large?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "px-6 mx-auto w-full",
        large ? "max-w-screen-2xl" : "max-w-screen-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
