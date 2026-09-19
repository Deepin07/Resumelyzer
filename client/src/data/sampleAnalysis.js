export const sampleAnalysis = {
  id: "demo",
  fileName: "Alex Rivera — Senior Frontend Engineer.pdf",
  targetRole: "Senior Product Engineer @ Stripe",
  uploadedLabel: "Uploaded 4m ago",

  overallScore: 84,
  matchLabel: "Great Match",
  potentialPoints: 14,

  metrics: [
    {
      label: "Keywords",
      score: 78,
      description: "2 required skills missing",
    },
    {
      label: "Impact Score",
      score: 88,
      description: "Strong metrics in 4/5 entries",
    },
    {
      label: "ATS Parsability",
      score: 95,
      description: "Clean heading architecture",
    },
  ],

  fixes: [
    {
      id: "impact",
      category: "High Impact",
      title: "Quantify Impact & Design Metrics",
      points: 6,
      description:
        "Current bullet in Acme Financial lacks quantitative outcomes and engineering scope.",
      original: "Worked on UI components and helped redesign the dashboard.",
      suggestion:
        "Architected 24+ accessible Design System tokens and reduced dashboard bundle size by 38%.",
    },
    {
      id: "verb",
      category: "Action Verbs",
      title: "Replace Passive Verb",
      points: 4,
      description:
        "“Assisted team” downplays leadership credibility. Replace with direct ownership.",
      original:
        "Assisted team in migration to modern build tools and modular structure.",
      suggestion:
        "Spearheaded micro-frontend migration across 6 squads, decoupling deploy velocity.",
    },
    {
      id: "keywords",
      category: "Keywords",
      title: "Missing Target Role Keywords",
      points: 4,
      description:
        "Stripe's job specification requires GraphQL and Core Web Vitals.",
      missingSkills: ["GraphQL (API Integration)", "Core Web Vitals (INP / LCP)"],
    },
  ],

  skillGroups: [
    {
      name: "Core Technologies",
      matched: "8/9",
      skills: [
        { name: "React", matched: true },
        { name: "TypeScript", matched: true },
        { name: "Next.js", matched: true },
        { name: "GraphQL", matched: false },
        { name: "Node.js", matched: true },
      ],
    },
    {
      name: "Domain & Architecture",
      matched: "4/5",
      skills: [
        { name: "Design Systems", matched: true },
        { name: "Micro-frontends", matched: true },
        { name: "Core Web Vitals", matched: false },
        { name: "State Management", matched: true },
      ],
    },
    {
      name: "Soft Skills & Leadership",
      matched: "3/3",
      skills: [
        { name: "Cross-functional Collaboration", matched: true },
        { name: "Sprint Mentorship", matched: true },
        { name: "Technical Roadmapping", matched: true },
      ],
    },
  ],
};