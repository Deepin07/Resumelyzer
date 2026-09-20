function MetricCard({ metric }) {
  return (
    <article className="rounded-lg bg-[#f2f3ff] p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-[#464555]">
          {metric.label}
        </p>

        <p className="font-display text-lg font-semibold">
          {metric.score}%
        </p>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#dae2fd]">
        <div
          className="h-full rounded-full bg-[#3525cd]"
          style={{ width: `${metric.score}%` }}
        />
      </div>

      <p className="mt-2 text-xs text-[#464555]">
        {metric.description}
      </p>
    </article>
  );
}

export default MetricCard