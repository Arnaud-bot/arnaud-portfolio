import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  narrow?: boolean;
};

export function Container({ narrow, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-12 lg:px-20",
        narrow ? "max-w-[720px]" : "max-w-[1280px]",
        className
      )}
      {...props}
    />
  );
}
