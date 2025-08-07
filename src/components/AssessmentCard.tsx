import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AssessmentCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "interactive";
  onClick?: () => void;
}

export const AssessmentCard = ({ children, className, variant = "default", onClick }: AssessmentCardProps) => {
  const variants = {
    default: "gradient-card shadow-soft",
    elevated: "gradient-card shadow-medium hover:shadow-strong animate-smooth",
    interactive: "gradient-card shadow-soft hover:shadow-medium animate-smooth cursor-pointer transform hover:-translate-y-1"
  };

  return (
    <Card 
      className={cn(
        "border-0 backdrop-blur-sm",
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};