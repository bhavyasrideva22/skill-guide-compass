import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AssessmentCard } from "./AssessmentCard";
import { cn } from "@/lib/utils";

interface MultipleChoiceProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

export const MultipleChoice = ({ question, options, onAnswer, selectedAnswer }: MultipleChoiceProps) => {
  const [selected, setSelected] = useState<string | undefined>(selectedAnswer);

  const handleSelect = (option: string) => {
    setSelected(option);
    onAnswer(option);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-6">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <AssessmentCard
            key={index}
            variant="interactive"
            className={cn(
              "p-4 cursor-pointer animate-smooth",
              selected === option && "ring-2 ring-primary gradient-primary text-white"
            )}
            onClick={() => handleSelect(option)}
          >
            <div className="flex items-center space-x-3">
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center animate-smooth",
                selected === option 
                  ? "border-white bg-white" 
                  : "border-muted-foreground"
              )}>
                {selected === option && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <span className={cn(
                "font-medium animate-smooth",
                selected === option ? "text-white" : "text-foreground"
              )}>
                {option}
              </span>
            </div>
          </AssessmentCard>
        ))}
      </div>
    </div>
  );
};