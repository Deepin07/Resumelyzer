import SkillGroup from "./SkillGroup";

function SkillsMapping({ skillGroups }) {
  return (
    <section className="mt-6 rounded-xl bg-white p-6 shadow-md">
      <h2 className="font-display text-xl font-semibold">
        Parsed Skills & Rubric Mapping
      </h2>

      <p className="mt-1 text-sm text-[#464555]">
        Verified across resume text aganist the target-role qualification
        rubric.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.name} group={group} />
        ))}
      </div>
    </section>
  );
}

export default SkillsMapping;
