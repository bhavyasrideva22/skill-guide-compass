import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AssessmentCard } from "@/components/AssessmentCard";
import { ScoreDisplay } from "@/components/ScoreDisplay";
import { RadarChart } from "@/components/RadarChart";
import { useAssessment } from "@/hooks/useAssessment";
import { AssessmentResult } from "@/types/assessment";
import { Download, Home, RefreshCw, Trophy, Lightbulb, Target } from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const { calculateResults, assessmentState } = useAssessment();
  const [results, setResults] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    if (assessmentState.answers.length === 0) {
      navigate("/");
      return;
    }
    
    const calculatedResults = calculateResults();
    setResults(calculatedResults);
  }, [calculateResults, assessmentState.answers.length, navigate]);

  if (!results) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p>Calculating your results...</p>
        </div>
      </div>
    );
  }

  const radarData = [
    { subject: 'Will', score: results.wiscarScores.will, fullMark: 100 },
    { subject: 'Interest', score: results.wiscarScores.interest, fullMark: 100 },
    { subject: 'Skill', score: results.wiscarScores.skill, fullMark: 100 },
    { subject: 'Cognitive', score: results.wiscarScores.cognitive, fullMark: 100 },
    { subject: 'Ability', score: results.wiscarScores.ability, fullMark: 100 },
    { subject: 'Real-World', score: results.wiscarScores.realWorld, fullMark: 100 }
  ];

  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'yes': return 'success';
      case 'maybe': return 'warning';
      case 'no': return 'destructive';
      default: return 'primary';
    }
  };

  const getRecommendationText = () => {
    switch (results.recommendation) {
      case 'yes': return 'Yes - Pursue Software Engineering';
      case 'maybe': return 'Maybe - Consider with Preparation';
      case 'no': return 'No - Explore Alternatives';
      default: return 'Assessment Incomplete';
    }
  };

  const getRecommendationDescription = () => {
    switch (results.recommendation) {
      case 'yes': 
        return "You show strong alignment with software engineering. Your interests, cognitive abilities, and motivation suggest you would thrive in this field.";
      case 'maybe': 
        return "You have potential for software engineering but may need additional preparation or skill development. Consider addressing identified gaps first.";
      case 'no': 
        return "Based on your responses, software engineering may not be the best fit. Consider exploring related technical roles that better match your profile.";
      default: 
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Your Assessment Results
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive analysis of your software engineering readiness
            </p>
          </div>

          {/* Main Recommendation */}
          <AssessmentCard variant="elevated" className="mb-8 p-8 text-center">
            <div className="space-y-4">
              <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full 
                ${getRecommendationColor() === 'success' ? 'bg-success/10 text-success' :
                  getRecommendationColor() === 'warning' ? 'bg-warning/10 text-warning' :
                  'bg-destructive/10 text-destructive'}`}>
                <Target className="w-5 h-5" />
                <span className="font-semibold text-lg">{getRecommendationText()}</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {getRecommendationDescription()}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <span>Confidence: {results.confidence}%</span>
                <span>•</span>
                <span>Overall Score: {results.overallScore}/100</span>
              </div>
            </div>
          </AssessmentCard>

          {/* Score Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ScoreDisplay
              title="Psychometric Fit"
              score={results.psychometricScore}
              interpretation="Personality and interest alignment"
              variant={results.psychometricScore >= 70 ? 'success' : results.psychometricScore >= 50 ? 'warning' : 'destructive'}
            />
            <ScoreDisplay
              title="Technical Readiness"
              score={results.technicalScore}
              interpretation="Current technical knowledge and aptitude"
              variant={results.technicalScore >= 70 ? 'success' : results.technicalScore >= 50 ? 'warning' : 'destructive'}
            />
            <ScoreDisplay
              title="Overall Readiness"
              score={results.overallScore}
              interpretation="Combined assessment score"
              variant={results.overallScore >= 70 ? 'success' : results.overallScore >= 50 ? 'warning' : 'destructive'}
            />
          </div>

          {/* WISCAR Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <AssessmentCard variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span>WISCAR Framework Analysis</span>
              </h3>
              <RadarChart data={radarData} />
              <div className="mt-4 text-sm text-muted-foreground">
                <p>This radar chart shows your strengths across the six key dimensions for software engineering success.</p>
              </div>
            </AssessmentCard>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span>Detailed Breakdown</span>
              </h3>
              
              <ScoreDisplay
                title="Will (Motivation & Grit)"
                score={results.wiscarScores.will}
                interpretation="Persistence and determination to learn"
                variant={results.wiscarScores.will >= 70 ? 'success' : 'warning'}
              />
              
              <ScoreDisplay
                title="Interest (Curiosity & Engagement)"
                score={results.wiscarScores.interest}
                interpretation="Genuine interest in technology"
                variant={results.wiscarScores.interest >= 70 ? 'success' : 'warning'}
              />
              
              <ScoreDisplay
                title="Cognitive Ability"
                score={results.wiscarScores.cognitive}
                interpretation="Problem-solving and logical thinking"
                variant={results.wiscarScores.cognitive >= 70 ? 'success' : 'warning'}
              />
              
              <ScoreDisplay
                title="Ability to Learn"
                score={results.wiscarScores.ability}
                interpretation="Growth mindset and adaptability"
                variant={results.wiscarScores.ability >= 70 ? 'success' : 'warning'}
              />
            </div>
          </div>

          {/* Career Suggestions */}
          <AssessmentCard variant="elevated" className="mb-8 p-6">
            <h3 className="text-xl font-semibold mb-6">Recommended Career Paths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.careerSuggestions.slice(0, 3).map((career, index) => (
                <AssessmentCard key={index} variant="interactive" className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{career.role}</h4>
                      <span className="text-sm font-medium text-primary">{career.fitScore}% fit</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{career.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {career.keySkills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AssessmentCard>
              ))}
            </div>
          </AssessmentCard>

          {/* Learning Path */}
          <AssessmentCard variant="elevated" className="mb-8 p-6">
            <h3 className="text-xl font-semibold mb-6">Recommended Learning Path</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {results.learningPath.map((path, index) => (
                <AssessmentCard key={index} variant="default" className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold">{path.stage}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{path.content}</p>
                    <div className="text-xs text-primary font-medium">{path.duration}</div>
                  </div>
                </AssessmentCard>
              ))}
            </div>
          </AssessmentCard>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => navigate("/")}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Button>
            <Button 
              onClick={() => window.print()}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Save Report</span>
            </Button>
            <Button 
              onClick={() => navigate("/assessment")}
              className="flex items-center space-x-2 gradient-primary"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retake Assessment</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;