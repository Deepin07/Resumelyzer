function SkillGroup({group}){
  const matchedCount = group.skills.filter((skill) => skill.matched).length;

  return (
    <article>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-base font-semibold">{group.name}</h3>

        <span className="text-xs font-semibold text-[#3525cd]">
          Matched {matchedCount}/{group.skills.length}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill.name}
            className={`rounded-md px-2.5 py-1 text-xs font-medium ${
              skill.matched
                ? "bg-[#e2e7ff] text-[#3525cd]"
                : "bg-red-100 text-red-700"
            }`}
          >
            {skill.name}
            <span className="ml-1">
              {skill.matched ? "✓" : "!"}
            </span>
          </span>
        ))}
      </div>
    </article>
  );
}


export default SkillGroup