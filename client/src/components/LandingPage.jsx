import { Link } from "react-router-dom";

import ReportPreview from "./ReportPreview";

const metrics = [
  {
    value: "+94%",
    label: "Interview rate boost",
    description: "Compared to un-optimized resumes",
    accent: true,
  },
  {
    value: "250k+",
    label: "Resumes tailored",
    description: "Across 85+ distinct career disciplines",
  },
  {
    value: "99.8%",
    label: "ATS filter pass rate",
    description: "Parsed cleanly without loss of layout",
    accent: true,
  },
  {
    value: "< 30s",
    label: "Average scan time",
    description: "Real-time dual vector token scoring",
  },
];

function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#131b2e]">
      <header className="border-b border-slate-200 bg-white px-6 py-5 shadow-sm sm:px-12">
        <p className="font-display text-xl font-semibold">Resumelyzer</p>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-12">
        <div>
          <div className="inline-flex items-center rounded-full bg-[#e2e7ff] px-4 py-1.5 text-xs font-semibold text-[#3525cd]">
            ✨ Autonomous ATS Keyword Intelligence
          </div>

          <h1 className="mt-5 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Tailor your resume to any job in{" "}
            <span className="text-[#3525cd] underline decoration-[#c0c1ff] decoration-4 underline-offset-4">
              seconds
            </span>
            .
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#464555]">
            Stop vanishing into the ATS black hole. Resumelyzer compares your
            resume against real Workday, Greenhouse, and Lever rubrics to
            extract missing keywords and generate quantified executive rewrites
            instantly.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/upload"
              className="rounded-lg bg-[#3525cd] px-6 py-3 font-display font-semibold text-white shadow-lg shadow-[#3525cd]/20 transition hover:bg-[#281aa8]"
            >
              Scan My Resume for Free →
            </Link>

            <button
              type="button"
              className="rounded-lg bg-[#eaedff] px-6 py-3 text-sm font-medium transition hover:bg-[#e2e7ff]"
            >
              ⏵ See Sample Report
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-xs text-[#464555]">
            <span>◉ No credit card required</span>
            <span>•</span>
            <span>◷ 60-second instant audit</span>
            <span>•</span>
            <span>◉ Zero data retention</span>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="grid size-9 place-items-center rounded-full border-2 border-white bg-[#e2dfff] text-xs font-semibold text-[#0f0069]">
                +42k
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#3525cd]">
                ★★★★★ <span className="text-[#131b2e]">4.9/5</span>
              </p>
              <p className="text-xs text-[#464555]">
                Trusted by 250,000+ job seekers placed at Stripe, Google, Figma
              </p>
            </div>
          </div>
        </div>

        <ReportPreview />
      </section>

      <section className="bg-[#eaedff] px-6 py-6 sm:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <p
                className={`font-display text-4xl font-bold ${
                  metric.accent ? "text-[#3525cd]" : "text-[#131b2e]"
                }`}
              >
                {metric.value}
              </p>

              <h2 className="mt-1 text-sm font-medium">{metric.label}</h2>
              <p className="text-xs text-[#464555]">{metric.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#4f46e5] px-6 py-20 text-center text-white sm:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight">
            Ready to land your dream role?
          </h2>

          <p className="mt-5 text-base leading-7 text-[#dad7ff]">
            Join over 250,000 professionals who tailored their resumes, escaped
            the ATS filter, and increased their interview call rate by up to
            94%.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/upload"
              className="rounded-lg bg-white px-6 py-3 font-display font-semibold text-[#3525cd] shadow-lg"
            >
              Scan My Resume for Free →
            </Link>

            <button
              type="button"
              className="rounded-lg bg-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/30"
            >
              View All Plans
            </button>
          </div>

          <p className="mt-5 text-xs text-[#dad7ff]/80">
            Free scan includes 1 full ATS match score, keyword gap analysis, and
            3 AI bullet point rewrites.
          </p>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
