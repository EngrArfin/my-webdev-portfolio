// components/Skill.tsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-screen-lg mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold">MY SKILLS</h2>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {/* Skill 1: HTML */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={90}
              text={`90%`}
              styles={buildStyles({
                pathColor: "#FFD700", // Yellow color for progress
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">HTML</p>
        </div>

        {/* Skill 2: CSS */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={80}
              text={`80%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">CSS</p>
        </div>

        {/* Skill 3: JavaScript */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={70}
              text={`70%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">JavaScript</p>
        </div>

        {/* Skill 4: Bootstrap */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={85}
              text={`85%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">Bootstrap</p>
        </div>

        {/* Skill 5: React.js */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={70}
              text={`70%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">React.js</p>
        </div>

        {/* Skill 6: Tailwind */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={60}
              text={`60%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">Tailwind</p>
        </div>

        {/* Skill 7: Firebase */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={65}
              text={`65%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">Firebase</p>
        </div>

        {/* Skill 8: MongoDB */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={50}
              text={`50%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">MongoDB</p>
        </div>

        {/* Skill 9: Express.js */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={45}
              text={`45%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">Express.js</p>
        </div>

        {/* Skill 10: Node.js */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={40}
              text={`40%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">Node.js</p>
        </div>

        {/* Skill 11: SQL */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={40}
              text={`40%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">SQL</p>
        </div>

        {/* Skill 12: JWT */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={35}
              text={`35%`}
              styles={buildStyles({
                pathColor: "#FFD700",
                textColor: "#FFD700",
                trailColor: "#333",
              })}
            />
          </div>
          <p className="mt-2 text-xl font-semibold">JWT</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
