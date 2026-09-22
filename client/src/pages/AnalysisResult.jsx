import { useState } from "react";
import { sampleAnalysis } from "../data/sampleAnalysis";
import ScoreSummary from "../components/ScoreSummary";
import ResumePreview from "../components/ResumePreview";
import FixesPanel from "../components/FixesPanel";
import SkillsMapping from "../components/SkillsMapping";

function applyFixesToResume(currentAnalysis, fixIds) {
  const fixesToApply = currentAnalysis.fixes.filter(
    (fix) => fixIds.includes(fix.id) && fix.resumeBulletId && fix.suggestion,
  );

  return {
    ...currentAnalysis,
    resume: {
      ...currentAnalysis.resume,
      experience: currentAnalysis.resume.experience.map((job) => ({
        ...job,
        bullets: job.bullets.map((bullet) => {
          const matchingFix = fixesToApply.find(
            (fix) => fix.resumeBulletId === bullet.id,
          );
          if (!matchingFix) return bullet;
          return {
            ...bullet,
            text: matchingFix.suggestion,
            flag: null,
            suggestion: null,
            applied: true,
          };
        }),
      })),
    },
  };
}

function applyFixesToSkills(currentAnalysis, fixIds){
  const skillUpdates = currentAnalysis.fixes.filter((fix) => fixIds.includes(fix.id)).flatMap((fix) => fix.skillUpdates || []);

  return {
    ...currentAnalysis,
    skillGroups: currentAnalysis.skillGroups.map((group) => ({
      ...group,
      skills: group.skills.map((skill) =>{
        const shouldMarkedAsMatched = skillUpdates.some(
          (update) => 
            update.groupName === group.name && 
            update.skillName === skill.name,
        );
        if(!shouldMarkedAsMatched) return skill;

        return{
          ...skill,
          matched: true,
        }
      })
    }))
  }
}

function AnalysisResult() {
  const [analysis, setAnalysis] = useState(sampleAnalysis);
  const [activeFilter, setActiveFilter] = useState("All");
  const [acceptedFixIds, setAcceptedFixIds] = useState([]);

  const visibleFixes =
    activeFilter === "All"
      ? analysis.fixes
      : analysis.fixes.filter((fix) => fix.category === activeFilter);

  function acceptFix(fixId) {
    setAcceptedFixIds((currentIds) => {
      if (currentIds.includes(fixId)) return currentIds;

      return [...currentIds, fixId];
    });

    setAnalysis((currentAnalysis) => {
      const resumeUpdated = applyFixesToResume(currentAnalysis, [fixId]);
      return applyFixesToSkills(resumeUpdated, [fixId]);
    })
  }

  function acceptAllFixes() {
    const allFixIds = analysis.fixes.map((fix) => fix.id);
    setAcceptedFixIds(allFixIds);
    setAnalysis((currentAnalysis) =>{
      const resumeUpdated = applyFixesToResume(
        currentAnalysis,
        allFixIds,
      );
      return applyFixesToSkills(resumeUpdated, allFixIds);
    });
  }

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#131b2e]">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5 shadow-sm sm:px-12">
        <p className="font-display text-xl font-semibold">Resumelyzer</p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={acceptAllFixes}
            className="rounded-lg bg-[#3525cd] px-4 py-2 text-sm font-semibold text-white"
          >
            Apply All 1-Click Fixes
          </button>

          <button
            type="button"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm"
          >
            Export Clean PDF
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-8">
        <section className="mb-5">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-base font-semibold">
              {analysis.fileName}
            </h1>

            <span className="rounded-full bg-[#e2e7ff] px-2 py-1 text-[11px] font-semibold">
              ● Analysis Complete
            </span>
          </div>

          <p className="mt-1 text-sm text-[#464555]">
            Targeting: <strong>{analysis.targetRole}</strong> ·{" "}
            {analysis.uploadedLabel}
          </p>
        </section>

        <ScoreSummary analysis={analysis} />

        <section className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.95fr)]">
          <ResumePreview resume={analysis.resume} />

          <FixesPanel
            fixes={visibleFixes}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            acceptedFixIds={acceptedFixIds}
            onAcceptFix={acceptFix}
          />
        </section>

        <SkillsMapping skillGroups={analysis.skillGroups} />
      </div>
    </main>
  );
}

export default AnalysisResult;
