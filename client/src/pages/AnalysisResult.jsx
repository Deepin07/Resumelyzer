import { useState } from "react";
import { sampleAnalysis } from "../data/sampleAnalysis";
import ScoreSummary from "../components/ScoreSummary";
import ResumePreview from "../components/ResumePreview";
import FixesPanel from "../components/FixesPanel";
import SkillsMapping from "../components/SkillsMapping";


function AnalysisResult() {

  const [ activeFilter, setActiveFilter ] = useState("All");
  const [acceptedFixIds, setAcceptedFixIds] = useState([]);

  const visibleFixes = activeFilter === "All" ? sampleAnalysis.fixes : sampleAnalysis.fixes.filter((fix) => fix.category === activeFilter);

  function acceptFix(fixId){
    setAcceptedFixIds((currentIds) => {
      if (currentIds.includes(fixId)) return currentIds;
      return [...currentIds, fixId];
    })

  }

  function acceptAllFixes(){
    setAcceptedFixIds(sampleAnalysis.fixes.map((fix) => fix.id));
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
              {sampleAnalysis.fileName}
            </h1>

            <span className="rounded-full bg-[#e2e7ff] px-2 py-1 text-[11px] font-semibold">
              ● Analysis Complete
            </span>
          </div>

          <p className="mt-1 text-sm text-[#464555]">
            Targeting: <strong>{sampleAnalysis.targetRole}</strong> ·{" "}
            {sampleAnalysis.uploadedLabel}
          </p>
        </section>

        <ScoreSummary analysis={sampleAnalysis} />

        <section className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.95fr)]">
          <ResumePreview />

          <FixesPanel
            fixes={visibleFixes}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            acceptedFixIds={acceptedFixIds}
            onAcceptFix={acceptFix}
          />
        </section>

        <SkillsMapping skillGroups={sampleAnalysis.skillGroups} />
      </div>
    </main>
  );
}

export default AnalysisResult;
