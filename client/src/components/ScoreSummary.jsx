import MetricCard from "./MetricCard";

function ScoreSummary({ analysis }) {
  const scoreDegrees = analysis.overallScore * 3.6;

  return (
    <section className="rounded-xl bg-white p-6 shadow-md">
      <div className="grid gap-6 xl:grid-cols-[1fr_2fr] xl:items-center">
        <div className="flex items-center gap-5">
          <div
            className="grid size-24 place-items-center rounded-full"
            style={{
              background: `conic-gradient(#3525cd ${scoreDegrees}deg, #dae2fd 0deg)`,
            }}
          >
            <div className="grid size-[76px] place-items-center rounded-full bg-white">
              <div className="text-center">
                <p className="font-display text-4xl font-bold">
                  {analysis.overallScore}
                </p>

                <p className="text-xs text-[#464555]">/ 100</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">
              {analysis.matchLabel}
            </h2>

            <p className="mt-1 max-w-xs text-sm leading-5 text-[#464555]">
              Capable of reaching{" "}
              <span className="font-semibold text-[#3525cd]">
                +{analysis.potentialPoints} potential pts
              </span>{" "}
              by resolving 3 high-impact semantic gaps.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {analysis.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScoreSummary;
