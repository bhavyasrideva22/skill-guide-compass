export interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory: string;
  question: string;
  options?: string[];
  labels?: string[];
}

export interface Answer {
  questionId: string;
  value: number | string;
  timestamp: Date;
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number;
}

export interface AssessmentResult {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  overallScore: number;
  recommendation: 'yes' | 'maybe' | 'no';
  confidence: number;
  careerSuggestions: CareerSuggestion[];
  learningPath: LearningPathItem[];
}

export interface CareerSuggestion {
  role: string;
  description: string;
  keySkills: string[];
  fitScore: number;
}

export interface LearningPathItem {
  stage: string;
  content: string;
  mode: string;
  duration?: string;
}

export interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  answers: Answer[];
  startTime: Date;
  sections: AssessmentSection[];
}