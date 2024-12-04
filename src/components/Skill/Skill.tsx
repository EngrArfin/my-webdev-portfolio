// components/Skill.tsx
import React from "react";

const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 70 },
  { name: "TypeScript", value: 85 },
  { name: "Bootstrap", value: 85 },
  { name: "React.js", value: 80 },
  { name: "Next.js", value: 85 },
  { name: "Redux.js", value: 83 },
  { name: "Tailwind CSS", value: 60 },
  { name: "Firebase", value: 95 },
  { name: "ReactRouter", value: 85 },
  { name: "MongoDB", value: 69 },
  { name: "Express.js", value: 85 },
  { name: "Node.js", value: 70 },
  { name: "SQL", value: 75 },
  { name: "JWT", value: 87 },
];

const Skill: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 via-sky-900 to-black text-white mx-auto ">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-yellow-400">MY SKILLS</h2>
        <p className="text-lg mt-2 text-white">
          A glimpse of my technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="card bg-red-900 shadow-xl text-center p-4 justify-center items-center"
          >
            <div
              className="radial-progress text-yellow-500 text-xl font-bold "
              style={{ "--value": skill.value } as React.CSSProperties}
            >
              {skill.value}%
            </div>
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
