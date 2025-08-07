import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AssessmentCard } from "@/components/AssessmentCard";
import { ProgressBar } from "@/components/ProgressBar";
import { LikertScale } from "@/components/LikertScale";
import { MultipleChoice } from "@/components/MultipleChoice";
import { useAssessment } from "@/hooks/useAssessment";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Assessment = () => {
  const navigate = useNavigate();
  const {
    assessmentState,
    addAnswer,
    nextQuestion,
    previousQuestion,
    isComplete,
    getProgress,
    getCurrentQuestionNumber,
    getTotalQuestions
  } = useAssessment();

  const [hasAnswered, setHasAnswered] = useState(false);

  if (isComplete()) {
    navigate("/results");
    return null;
  }

  const currentSection = assessmentState.sections[assessmentState.currentSection];
  const currentQuestion = currentSection.questions[assessmentState.currentQuestion];
  const existingAnswer = assessmentState.answers.find(a => a.questionId === currentQuestion.id);

  const handleAnswer = (value: number | string) => {
    addAnswer({
      questionId: currentQuestion.id,
      value,
      timestamp: new Date()
    });
    setHasAnswered(true);
  };

  const handleNext = () => {
    nextQuestion();
    setHasAnswered(false);
  };

  const handlePrevious = () => {
    previousQuestion();
    setHasAnswered(false);
  };

  const canGoNext = hasAnswered || existingAnswer;
  const canGoPrevious = getCurrentQuestionNumber() > 1;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                SkillFit Assessment
              </h1>
              <span className="text-muted-foreground">
                Question {getCurrentQuestionNumber()} of {getTotalQuestions()}
              </span>
            </div>
            <ProgressBar progress={getProgress()} />
          </div>

          {/* Section Info */}
          <AssessmentCard variant="elevated" className="mb-8 p-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {currentSection.title}
              </h2>
              <p className="text-muted-foreground">
                {currentSection.description}
              </p>
            </div>
          </AssessmentCard>

          {/* Question */}
          <AssessmentCard variant="default" className="mb-8 p-8">
            {currentQuestion.type === 'likert' ? (
              <LikertScale
                question={currentQuestion.question}
                labels={currentQuestion.labels || []}
                onAnswer={handleAnswer}
                selectedValue={existingAnswer?.value as number}
              />
            ) : (
              <MultipleChoice
                question={currentQuestion.question}
                options={currentQuestion.options || []}
                onAnswer={handleAnswer}
                selectedAnswer={existingAnswer?.value as string}
              />
            )}
          </AssessmentCard>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canGoNext}
              className="flex items-center space-x-2 gradient-primary"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;