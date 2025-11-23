import { cn } from "@/utils/utils";

export const Container = ({
  children,
  className,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <div className={cn("max-w-[140rem] mx-auto px-3", className)} id={id}>
      {children}
    </div>
  );
};
