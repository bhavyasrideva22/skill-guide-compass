import { AssessmentCard } from "./AssessmentCard";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ScoreDisplayProps {
  title: string;
  score: number;
  maxScore?: number;
  interpretation?: string;
  variant?: "primary" | "success" | "warning" | "destructive";
}

export const ScoreDisplay = ({ 
  title, 
  score, 
  maxScore = 100, 
  interpretation,
  variant = "primary" 
}: ScoreDisplayProps) => {
  const percentage = (score / maxScore) * 100;
  
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "text-success border-success/20 bg-success/5";
      case "warning":
        return "text-warning border-warning/20 bg-warning/5";
      case "destructive":
        return "text-destructive border-destructive/20 bg-destructive/5";
      default:
        return "text-primary border-primary/20 bg-primary/5";
    }
  };

  return (
    <AssessmentCard variant="elevated" className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <span className={cn("text-2xl font-bold", getVariantStyles())}>
            {score}/{maxScore}
          </span>
        </div>
        
        <Progress 
          value={percentage} 
          className={cn("h-3", getVariantStyles())}
        />
        
        {interpretation && (
          <p className="text-sm text-muted-foreground mt-3">{interpretation}</p>
        )}
      </div>
    </AssessmentCard>
  );
};