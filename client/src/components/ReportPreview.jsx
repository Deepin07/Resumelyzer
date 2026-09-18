function ReportPreview() {
  return (
    <div className="relative rounded-xl bg-white p-3 shadow-2xl shadow-slate-300/60">
      <div className="flex items-center justify-between rounded-md bg-[#f2f3ff] px-3 py-2 text-[11px] text-[#464555]">
        <span>● ● ● &nbsp; Diagnostic: Senior_Product_Designer_V4.pdf</span>
        <span className="font-semibold text-[#3525cd]">● Live ATS Sync</span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <ScoreCard title="Initial Scan" score="62%" color="bg-slate-500" />
        <ScoreCard title="Targeted Rewrite" score="94%" color="bg-[#3525cd]" />
      </div>

      <div className="mt-3 rounded-lg bg-[#f2f3ff] p-3">
        <div className="flex justify-between text-xs">
          <p className="font-semibold">Target Match Gap (Design Systems Role)</p>
          <p className="text-red-600">2 Critical Missing</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded bg-red-100 px-2 py-1 text-red-700">
            ⚠ Missing: “Design Tokens”
          </span>
          <span className="rounded bg-red-100 px-2 py-1 text-red-700">
            ⚠ Missing: “Conversion Rate”
          </span>
          <span className="rounded bg-white px-2 py-1">
            ✓ Found: “Figma Auto-Layout”
          </span>
          <span className="rounded bg-white px-2 py-1">
            ✓ Found: “Cross-functional”
          </span>
        </div>
      </div>

      <div className="mt-3 rounded-lg bg-[#f2f3ff] p-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium tracking-wide">
            BULLET POINT OPTIMIZATION
          </p>

          <span className="rounded bg-[#3525cd] px-2 py-1 text-[11px] text-white">
            Apply 1-Click AI Rewrite
          </span>
        </div>

        <div className="mt-3 rounded bg-[#eaedff] p-2 text-xs text-[#464555]">
          <p className="font-semibold text-[#777587]">ORIGINAL (WEAK IMPACT):</p>
          <p className="mt-1">
            “Responsible for designing components and coordinating with front-end
            developers on design handoffs.”
          </p>
        </div>

        <div className="mt-2 rounded bg-[#dae2fd] p-2 text-xs">
          <p className="font-semibold text-[#3525cd]">
            RESUMELYZER OUTPUT (QUANTIFIED & ATS OPTIMIZED):
          </p>
          <p className="mt-1">
            “Architected scalable <strong>Design Tokens</strong> library adopted
            by 24 engineers, boosting checkout{" "}
            <strong>Conversion Rate</strong> by 18.4% across 1.2M monthly users.”
          </p>
        </div>
      </div>

      <div className="mt-3 flex justify-between text-[11px]">
        <span className="text-[#3525cd]">
          ◉ Workday & Greenhouse Schema Compliant
        </span>
        <span>Export Ready (.docx / .pdf)</span>
      </div>

      <div className="absolute -bottom-10 left-0 rounded-lg bg-white px-4 py-2 text-xs shadow-lg">
        <strong>✣ +3.8x More Callbacks</strong>
        <p className="text-[#464555]">Validated against 1,200 tech listings</p>
      </div>
    </div>
  );
}

function ScoreCard({ title, score, color }) {
  return (
    <article className="rounded-lg bg-[#f2f3ff] p-3">
      <p className="text-xs text-[#464555]">{title}</p>
      <div className="mt-1 flex items-end gap-2">
        <p className="font-display text-4xl font-bold">{score}</p>
        <span className="mb-1 text-[11px] text-[#464555]">Filtered</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#dae2fd]">
        <div className={`h-full w-3/4 ${color}`} />
      </div>
    </article>
  );
}

export default ReportPreview;