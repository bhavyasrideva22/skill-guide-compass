import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LikertScaleProps {
  question: string;
  labels: string[];
  onAnswer: (value: number) => void;
  selectedValue?: number;
}

export const LikertScale = ({ question, labels, onAnswer, selectedValue }: LikertScaleProps) => {
  const [selected, setSelected] = useState<number | undefined>(selectedValue);

  const handleSelect = (value: number) => {
    setSelected(value);
    onAnswer(value);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-6">{question}</h3>
      <div className="grid grid-cols-5 gap-2">
        {labels.map((label, index) => (
          <div key={index} className="text-center">
            <Button
              variant={selected === index + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => handleSelect(index + 1)}
              className={cn(
                "w-full h-12 mb-2 animate-smooth",
                selected === index + 1 
                  ? "gradient-primary text-white shadow-medium" 
                  : "hover:shadow-soft"
              )}
            >
              {index + 1}
            </Button>
            <p className="text-xs text-muted-foreground leading-tight">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};