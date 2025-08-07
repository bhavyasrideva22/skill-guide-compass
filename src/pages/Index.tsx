import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Brain, Target, Lightbulb, TrendingUp, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-assessment.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Psychometric Evaluation",
      description: "Assess personality traits, interests, and cognitive preferences aligned with software engineering"
    },
    {
      icon: Target,
      title: "Technical Aptitude",
      description: "Evaluate logical reasoning, programming fundamentals, and technical knowledge"
    },
    {
      icon: Lightbulb,
      title: "WISCAR Framework",
      description: "Comprehensive analysis of Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world alignment"
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Personalized recommendations for software engineering roles and learning paths"
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Assessments Completed" },
    { icon: Clock, value: "25-30", label: "Minutes to Complete" },
    { icon: Target, value: "85%", label: "Accuracy Rate" },
    { icon: TrendingUp, value: "6", label: "Career Paths Analyzed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-primary bg-clip-text text-transparent">SkillFit</span>
                  <br />
                  <span className="text-foreground">Assessment</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover if software engineering is your perfect career match with our comprehensive 
                  readiness and alignment assessment system.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/assessment")}
                  className="gradient-primary text-lg px-8 py-6 shadow-medium hover:shadow-strong animate-smooth"
                >
                  Start Assessment
                </Button>
                <p className="text-sm text-muted-foreground">
                  Takes 25-30 minutes • Get instant results • No registration required
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-3xl opacity-20" />
              <img 
                src={heroImage}
                alt="Software Engineering Assessment"
                className="relative rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Software Engineering */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">About Software Engineering</h2>
              <p className="text-lg text-muted-foreground">
                Software Engineering involves designing, developing, testing, and maintaining software systems. 
                It encompasses various specializations and offers diverse career opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <AssessmentCard variant="elevated" className="p-6">
                <h3 className="font-semibold mb-3">Frontend Developer</h3>
                <p className="text-sm text-muted-foreground">Build user interfaces and web applications</p>
              </AssessmentCard>
              
              <AssessmentCard variant="elevated" className="p-6">
                <h3 className="font-semibold mb-3">Backend Engineer</h3>
                <p className="text-sm text-muted-foreground">Develop server-side logic and APIs</p>
              </AssessmentCard>
              
              <AssessmentCard variant="elevated" className="p-6">
                <h3 className="font-semibold mb-3">Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground">Work on both frontend and backend</p>
              </AssessmentCard>
              
              <AssessmentCard variant="elevated" className="p-6">
                <h3 className="font-semibold mb-3">DevOps Engineer</h3>
                <p className="text-sm text-muted-foreground">Manage deployment and infrastructure</p>
              </AssessmentCard>
              
              <AssessmentCard variant="elevated" className="p-6">
                <h3 className="font-semibold mb-3">QA Engineer</h3>
                <p className="text-sm text-muted-foreground">Ensure software quality through testing</p>
              </AssessmentCard>
              
              <AssessmentCard variant="elevated" className="p-6">
                <h3 className="font-semibold mb-3">Software Architect</h3>
                <p className="text-sm text-muted-foreground">Design large-scale software systems</p>
              </AssessmentCard>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Who Thrives in Software Engineering?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Cognitive Fit</h4>
                  <p className="text-sm text-muted-foreground">Logical thinkers, detail-oriented, systematic problem-solvers</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Personality Traits</h4>
                  <p className="text-sm text-muted-foreground">Curious, persistent, analytical, collaborative</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Work Style</h4>
                  <p className="text-sm text-muted-foreground">Comfortable with iteration, debugging, continuous learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Assessment Framework</h2>
              <p className="text-lg text-muted-foreground">
                Our scientifically-designed assessment evaluates multiple dimensions to provide 
                accurate career guidance and personalized recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <AssessmentCard key={index} variant="elevated" className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </AssessmentCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Potential?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the comprehensive SkillFit assessment and get personalized insights into your 
              software engineering readiness, along with tailored career guidance and learning recommendations.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate("/assessment")}
              className="gradient-primary text-lg px-8 py-6 shadow-medium hover:shadow-strong animate-smooth"
            >
              Begin Your Assessment Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
