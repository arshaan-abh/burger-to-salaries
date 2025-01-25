import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Block = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center text-center h-full min-h-16 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};
