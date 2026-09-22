export const sampleAnalysis = {
  id: "demo",
  fileName: "Alex Rivera — Senior Frontend Engineer.pdf",
  targetRole: "Senior Product Engineer @ Stripe",
  uploadedLabel: "Uploaded 4m ago",

  overallScore: 84,
  matchLabel: "Great Match",
  potentialPoints: 14,
  highlights: [
    {
      resumeBulletId: "acme-dashboard",
      text: "Worked on UI components and helped redesign the dashboard.",
      flag: "Needs Metric",
      suggestion: "Suggested: Quantify bundle impact and design tokens built.",
    },
    {
      resumeBulletId: "acme-migration",
      text: "Assisted team in migration to modern build tools and modular structure.",
      flag: "Weak Verb",
      suggestion:
        "Suggested: Replace “Assisted” with a high-ownership action verb.",
    },
  ],

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
      resumeBulletId: "acme-dashboard",
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
      resumeBulletId: "acme-migration",
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
      missingSkills: [
        "GraphQL (API Integration)",
        "Core Web Vitals (INP / LCP)",
      ],
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
  resume: {
    name: "Alex Rivera",
    title: "Staff Frontend Engineer",
    location: "San Francisco, CA",
    email: "alex.rivera@engineers.io",
    github: "github.com/alexrivera",
    linkedin: "linkedin.com/in/alex-rivera",

    summary:
      "Staff-level frontend architect with 8+ years leading design systems, high-throughput financial web applications, and developer productivity platforms. Proven track record reducing runtime bundle payloads and mentoring distributed frontend engineering organizations.",

    experience: [
      {
        role: "Staff Frontend Developer",
        company: "Acme Financial",
        period: "2021 – Present",
        bullets: [
          {
            id: "acme-dashboard",
            text: "Worked on UI components and helped redesign the dashboard.",
            flag: "Needs Metric",
            suggestion:
              "Suggested: Quantify bundle impact and design tokens built.",
          },
          {
            id: "acme-migration",
            text: "Assisted team in migration to modern build tools and modular structure.",
            flag: "Weak Verb",
            suggestion:
              "Suggested: Replace “Assisted” with a high-ownership action verb.",
          },
          {
            text: "Engineered distributed CI test matrix reducing frontend build times from 24 minutes to 6.2 minutes across 42 repositories.",
          },
        ],
      },
      {
        role: "Senior UI Engineer",
        company: "CloudScale Platforms",
        period: "2018 – 2021",
        bullets: [
          {
            text: "Built real-time telemetry charting suite with WebGL and React, streaming 50,000+ metrics/sec at 60fps.",
          },
          {
            text: "Spearheaded accessibility audits achieving WCAG 2.1 AA compliance across core product surfaces.",
          },
        ],
      },
    ],

    education: {
      degree: "B.S. in Computer Science • UC Berkeley",
      period: "2014 – 2018",
    },
  },
};
