import { useState, useCallback } from "react";
import { AssessmentState, Answer, AssessmentResult } from "@/types/assessment";
import { assessmentSections, careerRoles, learningPaths } from "@/data/assessmentData";

export const useAssessment = () => {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentSection: 0,
    currentQuestion: 0,
    answers: [],
    startTime: new Date(),
    sections: assessmentSections
  });

  const addAnswer = useCallback((answer: Answer) => {
    setAssessmentState(prev => ({
      ...prev,
      answers: [...prev.answers.filter(a => a.questionId !== answer.questionId), answer]
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setAssessmentState(prev => {
      const currentSection = prev.sections[prev.currentSection];
      const isLastQuestion = prev.currentQuestion >= currentSection.questions.length - 1;
      
      if (isLastQuestion) {
        // Move to next section
        const isLastSection = prev.currentSection >= prev.sections.length - 1;
        if (isLastSection) {
          return prev; // Assessment complete
        }
        return {
          ...prev,
          currentSection: prev.currentSection + 1,
          currentQuestion: 0
        };
      } else {
        // Move to next question
        return {
          ...prev,
          currentQuestion: prev.currentQuestion + 1
        };
      }
    });
  }, []);

  const previousQuestion = useCallback(() => {
    setAssessmentState(prev => {
      const isFirstQuestion = prev.currentQuestion === 0;
      
      if (isFirstQuestion) {
        // Move to previous section
        const isFirstSection = prev.currentSection === 0;
        if (isFirstSection) {
          return prev; // Can't go back further
        }
        const prevSection = prev.sections[prev.currentSection - 1];
        return {
          ...prev,
          currentSection: prev.currentSection - 1,
          currentQuestion: prevSection.questions.length - 1
        };
      } else {
        // Move to previous question
        return {
          ...prev,
          currentQuestion: prev.currentQuestion - 1
        };
      }
    });
  }, []);

  const calculateResults = useCallback((): AssessmentResult => {
    const { answers } = assessmentState;
    
    // Calculate psychometric score
    const psychometricAnswers = answers.filter(a => 
      assessmentSections[0].questions.find(q => q.id === a.questionId)
    );
    const psychometricScore = Math.round(
      (psychometricAnswers.reduce((sum, a) => sum + (typeof a.value === 'number' ? a.value : 3), 0) / 
       (psychometricAnswers.length * 5)) * 100
    );

    // Calculate technical score
    const technicalAnswers = answers.filter(a => 
      assessmentSections[1].questions.find(q => q.id === a.questionId)
    );
    const technicalScore = Math.round(
      (technicalAnswers.filter(a => {
        const question = assessmentSections[1].questions.find(q => q.id === a.questionId);
        // Simplified scoring - in real implementation, you'd have correct answers
        return typeof a.value === 'string';
      }).length / technicalAnswers.length) * 100
    );

    // Calculate WISCAR scores
    const wiscarAnswers = answers.filter(a => 
      assessmentSections[2].questions.find(q => q.id === a.questionId)
    );
    
    const wiscarScores = {
      will: Math.round(((answers.find(a => a.questionId === 'wiscar_1')?.value as number || 3) / 5) * 100),
      interest: Math.round(((answers.find(a => a.questionId === 'wiscar_2')?.value as number || 3) / 5) * 100),
      skill: technicalScore,
      cognitive: Math.round(((answers.find(a => a.questionId === 'wiscar_3')?.value === 'Break it down into smaller, manageable parts' ? 5 : 3) / 5) * 100),
      ability: Math.round(((answers.find(a => a.questionId === 'wiscar_4')?.value as number || 3) / 5) * 100),
      realWorld: Math.round(((answers.find(a => a.questionId === 'wiscar_5')?.value ? 4 : 3) / 5) * 100)
    };

    // Calculate overall score
    const overallScore = Math.round(
      (psychometricScore + technicalScore + Object.values(wiscarScores).reduce((a, b) => a + b, 0) / 6) / 3
    );

    // Determine recommendation
    let recommendation: 'yes' | 'maybe' | 'no' = 'maybe';
    if (overallScore >= 70 && wiscarScores.interest >= 70) {
      recommendation = 'yes';
    } else if (overallScore < 50 || wiscarScores.interest < 50) {
      recommendation = 'no';
    }

    // Calculate career suggestions
    const careerSuggestions = careerRoles.map(role => ({
      ...role,
      fitScore: Math.round(
        (wiscarScores.interest * 0.3 + 
         wiscarScores.cognitive * 0.3 + 
         wiscarScores.skill * 0.4)
      )
    })).sort((a, b) => b.fitScore - a.fitScore);

    return {
      psychometricScore,
      technicalScore,
      wiscarScores,
      overallScore,
      recommendation,
      confidence: Math.round(overallScore * 0.8 + 20), // Simplified confidence calculation
      careerSuggestions,
      learningPath: learningPaths
    };
  }, [assessmentState]);

  const isComplete = () => {
    const { currentSection, sections } = assessmentState;
    return currentSection >= sections.length;
  };

  const getTotalQuestions = () => {
    return assessmentSections.reduce((total, section) => total + section.questions.length, 0);
  };

  const getCurrentQuestionNumber = () => {
    const { currentSection, currentQuestion } = assessmentState;
    let questionNumber = 1;
    
    for (let i = 0; i < currentSection; i++) {
      questionNumber += assessmentSections[i].questions.length;
    }
    
    return questionNumber + currentQuestion;
  };

  const getProgress = () => {
    if (isComplete()) return 100;
    return Math.round((getCurrentQuestionNumber() / getTotalQuestions()) * 100);
  };

  return {
    assessmentState,
    addAnswer,
    nextQuestion,
    previousQuestion,
    calculateResults,
    isComplete,
    getProgress,
    getCurrentQuestionNumber,
    getTotalQuestions
  };
};