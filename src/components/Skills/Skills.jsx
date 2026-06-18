
const SkillsSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git/Github",
    "Figma",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-10">
        My Skills
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="
              bg-slate-900
              border
              border-slate-800
              px-8
              py-4
              rounded-xl
              font-medium
            "
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
};

export default SkillsSection;