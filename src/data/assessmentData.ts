import { AssessmentSection } from "@/types/assessment";

export const assessmentSections: AssessmentSection[] = [
  {
    id: "psychometric",
    title: "Psychometric Evaluation",
    description: "Assess your personality traits, interests, and cognitive preferences",
    questions: [
      {
        id: "psych_1",
        type: "likert",
        category: "psychometric",
        subcategory: "interest",
        question: "I often wonder how apps or websites are built.",
        labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
      },
      {
        id: "psych_2",
        type: "likert",
        category: "psychometric",
        subcategory: "cognitive",
        question: "I enjoy solving complex puzzles and logical problems.",
        labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
      },
      {
        id: "psych_3",
        type: "multiple-choice",
        category: "psychometric",
        subcategory: "motivation",
        question: "What primarily motivates you to learn software engineering?",
        options: [
          "High salary potential and job security",
          "Genuine curiosity about how technology works",
          "Desire to create and build useful applications",
          "Influence from family or peers",
          "Industry prestige and recognition"
        ]
      },
      {
        id: "psych_4",
        type: "likert",
        category: "psychometric",
        subcategory: "grit",
        question: "I finish what I start, even when it becomes difficult or boring.",
        labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
      },
      {
        id: "psych_5",
        type: "multiple-choice",
        category: "psychometric",
        subcategory: "work_style",
        question: "Which work environment appeals to you most?",
        options: [
          "Collaborative team environment with frequent discussions",
          "Independent work with occasional check-ins",
          "Structured environment with clear guidelines",
          "Dynamic environment with changing priorities",
          "Creative environment encouraging innovation"
        ]
      }
    ]
  },
  {
    id: "technical",
    title: "Technical & Aptitude Assessment",
    description: "Evaluate your logical reasoning, programming fundamentals, and technical knowledge",
    questions: [
      {
        id: "tech_1",
        type: "multiple-choice",
        category: "technical",
        subcategory: "logical_reasoning",
        question: "What comes next in this sequence: 2, 6, 18, 54, ?",
        options: ["108", "162", "216", "270", "324"]
      },
      {
        id: "tech_2",
        type: "multiple-choice",
        category: "technical",
        subcategory: "programming",
        question: "In programming, what is a variable?",
        options: [
          "A mathematical equation",
          "A storage location with an associated name",
          "A type of software application",
          "A computer hardware component",
          "A programming language"
        ]
      },
      {
        id: "tech_3",
        type: "multiple-choice",
        category: "technical",
        subcategory: "cs_concepts",
        question: "What does 'debugging' mean in programming?",
        options: [
          "Writing new code",
          "Deleting old code",
          "Finding and fixing errors in code",
          "Commenting code",
          "Optimizing code performance"
        ]
      },
      {
        id: "tech_4",
        type: "multiple-choice",
        category: "technical",
        subcategory: "logical_reasoning",
        question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
        options: ["5 minutes", "20 minutes", "100 minutes", "500 minutes", "1 minute"]
      },
      {
        id: "tech_5",
        type: "multiple-choice",
        category: "technical",
        subcategory: "programming",
        question: "What is the primary purpose of a loop in programming?",
        options: [
          "To store data",
          "To repeat a set of instructions",
          "To connect to the internet",
          "To display output",
          "To handle errors"
        ]
      }
    ]
  },
  {
    id: "wiscar",
    title: "WISCAR Framework Analysis",
    description: "Comprehensive evaluation of Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world alignment",
    questions: [
      {
        id: "wiscar_1",
        type: "likert",
        category: "wiscar",
        subcategory: "will",
        question: "I am willing to spend several hours daily learning programming concepts.",
        labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
      },
      {
        id: "wiscar_2",
        type: "likert",
        category: "wiscar",
        subcategory: "interest",
        question: "I actively seek out information about new technologies and programming languages.",
        labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
      },
      {
        id: "wiscar_3",
        type: "multiple-choice",
        category: "wiscar",
        subcategory: "cognitive",
        question: "How do you typically approach a complex problem?",
        options: [
          "Break it down into smaller, manageable parts",
          "Try different solutions until one works",
          "Ask for help immediately",
          "Avoid it if possible",
          "Use trial and error exclusively"
        ]
      },
      {
        id: "wiscar_4",
        type: "likert",
        category: "wiscar",
        subcategory: "ability",
        question: "I learn best when I can experiment and make mistakes.",
        labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
      },
      {
        id: "wiscar_5",
        type: "multiple-choice",
        category: "wiscar",
        subcategory: "real_world",
        question: "Which aspect of software engineering appeals to you most?",
        options: [
          "Building user interfaces and web applications",
          "Working with databases and server logic",
          "Testing and ensuring software quality",
          "Managing deployment and infrastructure",
          "Analyzing requirements and system design"
        ]
      }
    ]
  }
];

export const careerRoles = [
  {
    role: "Frontend Developer",
    description: "Build user interfaces with HTML, CSS, JavaScript, and modern frameworks",
    keySkills: ["HTML/CSS", "JavaScript", "React/Vue", "UI/UX Design"],
    requirements: { interest: 70, cognitive: 60, skill: 50 }
  },
  {
    role: "Backend Engineer",
    description: "Develop server-side logic, APIs, and database interactions",
    keySkills: ["Python/Java/Node.js", "Databases", "APIs", "System Design"],
    requirements: { interest: 70, cognitive: 70, skill: 60 }
  },
  {
    role: "Full Stack Developer",
    description: "Work on both frontend and backend development",
    keySkills: ["Frontend Technologies", "Backend Technologies", "Databases", "DevOps"],
    requirements: { interest: 80, cognitive: 75, skill: 70 }
  },
  {
    role: "QA Engineer",
    description: "Ensure software quality through testing and automation",
    keySkills: ["Testing Frameworks", "Automation", "Bug Tracking", "Attention to Detail"],
    requirements: { interest: 60, cognitive: 65, skill: 55 }
  },
  {
    role: "DevOps Engineer",
    description: "Manage deployment, infrastructure, and development operations",
    keySkills: ["Cloud Platforms", "CI/CD", "Containerization", "Monitoring"],
    requirements: { interest: 65, cognitive: 75, skill: 70 }
  }
];

export const learningPaths = [
  {
    stage: "Beginner",
    content: "HTML, CSS, JavaScript fundamentals, Git version control",
    mode: "Interactive tutorials and hands-on projects",
    duration: "2-3 months"
  },
  {
    stage: "Intermediate",
    content: "React/Vue framework, APIs, databases, responsive design",
    mode: "Guided bootcamp or structured course",
    duration: "3-4 months"
  },
  {
    stage: "Advanced",
    content: "Backend development, system design, testing, deployment",
    mode: "Real-world projects and internships",
    duration: "4-6 months"
  },
  {
    stage: "Job-ready",
    content: "Portfolio projects, open source contributions, interview preparation",
    mode: "Practical experience and networking",
    duration: "2-3 months"
  }
];