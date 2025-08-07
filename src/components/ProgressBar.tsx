import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

export const ProgressBar = ({ progress, className, showPercentage = true }: ProgressBarProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">Progress</span>
        {showPercentage && (
          <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
        )}
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <div 
          className="h-full gradient-primary rounded-full animate-smooth"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};