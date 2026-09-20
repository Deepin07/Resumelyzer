import FixCard from "../components/FixCard";

const filters = ["All", "High Impact", "Keywords", "Action Verbs"];

function FixesPanel({
  fixes,
  activeFilter,
  onFilterChange,
  acceptedFixIds,
  onAcceptFix,
}) {
  const pendingCount = fixes.filter(
    (fix) => !acceptedFixIds.includes(fix.id),
  ).length;
  return (
    <aside className="space-y-5">
      <section className="rounded-xl bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-lg font-semibold">
            Recommended Fixes
          </h2>

          <span className="rounded-full bg-[#f2f3ff] px-2 py-1 text-xs font-medium text-[#464555]">
            {pendingCount} pending
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeFilter === filter
                  ? "bg-[#3525cd] text-white"
                  : "bg-[#f2f3ff] text-[#464555] hover:bg-[#e2e7ff]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {fixes.length > 0 ? (
        fixes.map((fix) => (
          <FixCard
            key={fix.id}
            fix={fix}
            isAccepted={acceptedFixIds.includes(fix.id)}
            onAccept={onAcceptFix}
          />
        ))
      ) : (
        <div className="rounded-xl bg-white p-6 text-center text-sm text-[#464555] shadow-sm">
          No fixes in this category.
        </div>
      )}
    </aside>
  );
}

export default FixesPanel;
