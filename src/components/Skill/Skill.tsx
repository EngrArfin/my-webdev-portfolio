"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  { name: "GSAP", value: 55 },
  { name: "JWT", value: 87 },
];

const Skill: React.FC = () => {
  const [displayValues, setDisplayValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const increment = 50;
    const totalFrames = duration / increment;

    const easeOut = (t: number) => t * (2 - t);

    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = easeOut(frame / totalFrames);

      setDisplayValues(
        skills.map((skill) =>
          Math.min(Math.floor(progress * skill.value), skill.value)
        )
      );

      if (frame === totalFrames) clearInterval(interval);
    }, increment);

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP scroll animation for first-time entry
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: -100, // Initial position off-screen to the left
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2, // Duration of animation
          delay: index * 0.1, // Stagger the animations by index
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start animation when the card is 80% from the top of the viewport
            once: true, // Only trigger the animation once
          },
        }
      );
    });

    // Cleanup GSAP ScrollTrigger when the component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-gray-800 text-white mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-yellow-400">MY SKILLS</h2>
        <p className="text-lg mt-2 text-white">
          A glimpse of my technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card card bg-gray-900 shadow-xl text-center p-4 justify-center items-center"
          >
            <div
              className="radial-progress text-yellow-500 text-xl font-bold"
              style={
                {
                  "--value": displayValues[index],
                } as React.CSSProperties
              }
            >
              {displayValues[index]}%
            </div>
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;

/* "use client";
import { useEffect, useState } from "react";

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
  { name: "GSAP", value: 55 },
  { name: "JWT", value: 87 },
];

const Skill: React.FC = () => {
  const [displayValues, setDisplayValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const increment = 50;
    const totalFrames = duration / increment;

    const easeOut = (t: number) => t * (2 - t);

    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = easeOut(frame / totalFrames);

      setDisplayValues(
        skills.map((skill) =>
          Math.min(Math.floor(progress * skill.value), skill.value)
        )
      );

      if (frame === totalFrames) clearInterval(interval);
    }, increment);
  }, []);

  return (
    <section className="bg-gray-800 text-white mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-yellow-400">MY SKILLS</h2>
        <p className="text-lg mt-2 text-white">
          A glimpse of my technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="card bg-gray-900 shadow-xl text-center p-4 justify-center items-center"
          >
            <div
              className="radial-progress text-yellow-500 text-xl font-bold"
              style={
                {
                  "--value": displayValues[index],
                } as React.CSSProperties
              }
            >
              {displayValues[index]}%
            </div>
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill; */
