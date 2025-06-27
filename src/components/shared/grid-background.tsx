import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[90vh] w-full   items-center justify-center ">
      <div
        className={cn(
          "absolute inset-0  ",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none  absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="z-10">{children}</div>
    </div>
  );
}
