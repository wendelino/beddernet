import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function WidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("px-6  mx-auto w-full max-w-screen-xl", className)}>
      {children}
    </div>
  );
}
