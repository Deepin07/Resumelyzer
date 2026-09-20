import { useState } from "react";

function ResumePreview({ resume }) {
  const [viewMode, setViewMode] = useState("annotated");

  const isAnnotated = viewMode === "annotated";

  return (
    <section>
      <div>
        <div>
          <button
            type="button"
            onClick={() => setViewMode("annotated")}
            aria-pressed={isAnnotated}
            className={`rounded px-3 py-1.5 text-sm font-medium transition ${
              isAnnotated
                ? "bg-[#3525cd] text-white"
                : "text-[#464555] hover:bg-[#f2f3ff]"
            }`}
          >
            Annotated
          </button>
          <button
            type="button"
            onClick={() => setViewMode("clean")}
            aria-pressed={!isAnnotated}
            className={`rounded px-3 py-1.5 text-sm font-medium transition ${
              !isAnnotated
                ? "bg-[#3525cd] text-white"
                : "text-[#464555] hover:bg-[#f2f3ff]"
            }`}
          >
            Clean Diff
          </button>
        </div>
        <span className="text-sm font-medium">100%</span>
      </div>
      <article className="p-8 sm:p-12">
        <header className="border-b border-slate-200 pb-6">
          <h2 className="font-display text-4xl font-bold">{resume.name}</h2>

          <p className="mt-1 font-display text-lg font-semibold text-[#3525cd]">
            {resume.title}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#64748b]">
            <span>{resume.location}</span>
            <span>•</span>
            <span>{resume.email}</span>
            <span>•</span>
            <span>{resume.github}</span>
            <span>•</span>
            <span>{resume.linkedin}</span>
          </div>
        </header>

        <ResumeSection title="Professional Summary">
          <p className="leading-6 text-[#364152]">{resume.summary}</p>
        </ResumeSection>

        <ResumeSection title="Work Experience">
          <div className="space-y-8">
            {resume.experience.map((job) => (
              <div key={`${job.company}-${job.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {job.role}
                  </h3>

                  <p className="text-sm text-[#64748b]">
                    {job.company} • {job.period}
                  </p>
                </div>

                <ul className="mt-4 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.text}
                      className={`rounded-lg p-3 text-sm leading-6 ${
                        isAnnotated && bullet.flag ? "bg-[#f2f3ff]" : ""
                      }`}
                    >
                      <div className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#3525cd]" />

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <p>{bullet.text}</p>

                            {isAnnotated && bullet.flag && (
                              <span
                                className={`rounded-full px-2 py-1 text-xs font-medium ${
                                  bullet.flag === "Needs Metric"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-[#e2e7ff] text-[#3525cd]"
                                }`}
                              >
                                {bullet.flag}
                              </span>
                            )}
                          </div>

                          {isAnnotated && bullet.suggestion && (
                            <p className="mt-2 text-xs font-medium text-[#3525cd]">
                              {bullet.suggestion}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="flex flex-wrap justify-between gap-2">
            <p className="font-semibold">{resume.education.degree}</p>
            <p className="text-sm text-[#64748b]">{resume.education.period}</p>
          </div>
        </ResumeSection>
      </article>
    </section>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="mt-8">
      <h3 className="text-xs font-bold uppercase tracking-wide text-[#475569]">
        {title}
      </h3>

      <div className="mt-3">{children}</div>
    </section>
  );
}

export default ResumePreview;
