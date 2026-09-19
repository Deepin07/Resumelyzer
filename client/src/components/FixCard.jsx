
function FixCard({fix, isAccepted, onAccept}){
  return (
    <article className="rounded-xl border-l-4 border-[#3525cd] bg-white p-5 shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display font-semibold">{fix.title}</h3>

        <span className="rounded bg-[#e2e7ff] px-2 py-1 text-xs font-semibold text-[#3525cd]">
          +{fix.points} pts
        </span>
      </div>

      <p className="mt-2 text-sm text-[#464555]">{fix.description}</p>

      {fix.original && (
        <div className="mt-4 rounded-lg bg-[#f2f3ff] p-3 text-sm">
          <p className="text-xs font-semibold text-[#777587]">ORIGINAL</p>
          <p className="mt-1 line-through">{fix.original}</p>
        </div>
      )}

      {fix.suggestion && (
        <div className="mt-2 rounded-lg bg-[#dae2fd] p-3 text-sm">
          <p className="text-xs font-semibold text-[#3525cd]">
            AI PROPOSED UPGRADE
          </p>
          <p className="mt-1">{fix.suggestion}</p>
        </div>
      )}

      <button
        type="button"
        disabled={isAccepted}
        onClick={() => onAccept(fix.id)}
        className="mt-4 rounded-lg bg-[#3525cd] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
      >
        {isAccepted ? "Accepted" : "✓ Accept Rewrite"}
      </button>
    </article>
  );
}

export default FixCard