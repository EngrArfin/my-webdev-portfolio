"use client";

import { useEffect, useState } from "react";

const ExperienceInfo = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const increment = 50;
      const totalFrames = duration / increment;

      const easeOut = (t: number) => t * (2 - t);

      let frame = 0;

      const interval = setInterval(() => {
        frame++;
        const progress = easeOut(frame / totalFrames);

        // Update counters based on progress
        setExperience(Math.min(Math.floor(progress * 16), 16));
        setProjects(Math.min(Math.floor(progress * 6), 6));
        setCustomers(Math.min(Math.floor(progress * 3), 3));
        setAwards(Math.min(Math.floor(progress * 0), 0)); // For awards, it remains 0

        if (frame === totalFrames) clearInterval(interval);
      }, increment);
    };

    animateCounters();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-sky-900 to-black text-white mx-auto">
      <h2 className="flex justify-center items-center text-4xl font-bold text-yellow-500 py-8">
        Experience / Info
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Personal Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-yellow-500 pb-2">
              Personal Infos
            </h2>
            <ul className="space-y-6 text-lg">
              <div className="flex flex-wrap gap-6">
                <div>
                  <li>
                    <span className="font-bold text-yellow-500">
                      First Name:
                    </span>{" "}
                    Md Samsel
                  </li>
                  <li>
                    <span className="font-bold text-yellow-500">
                      Last Name:
                    </span>{" "}
                    Arfin
                  </li>
                  <li>
                    <span className="font-bold text-yellow-500">
                      Nationality:
                    </span>{" "}
                    Bangladeshi
                  </li>
                  <li>
                    <span className="font-bold text-yellow-500">
                      Freelance:
                    </span>{" "}
                    Available
                  </li>
                  <li>
                    <span className="font-bold text-yellow-500">Address:</span>{" "}
                    Dhaka
                  </li>
                </div>
                <div>
                  <li>
                    <span className="font-bold text-yellow-500">Phone:</span>{" "}
                    +8801952-487468
                  </li>
                  <li>
                    <span className="font-bold text-yellow-500">Email:</span>{" "}
                    <a
                      href="mailto:arfin.cse.green.edu.bd@gmail.com"
                      className="text-red-500 underline hover:text-yellow-400 transition duration-300"
                    >
                      arfin.cse.green.edu.bd@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold text-yellow-500">Skype:</span>{" "}
                    arfin123
                  </li>
                  <li>
                    <span className="font-bold text-yellow-500">
                      Languages:
                    </span>{" "}
                    Bangla, English
                  </li>
                </div>
              </div>
            </ul>
          </div>

          {/* Counters Section */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {/* Experience */}
              <div className="bg-red-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                <h3 className="text-5xl font-extrabold text-yellow-400">
                  {experience}+
                </h3>
                <p className="text-lg font-medium mt-2">Years of Experience</p>
              </div>

              {/* Completed Projects */}
              <div className="bg-red-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                <h3 className="text-5xl font-extrabold text-yellow-400">
                  {projects}+
                </h3>
                <p className="text-lg font-medium mt-2">Completed Projects</p>
              </div>

              {/* Happy Customers */}
              <div className="bg-red-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                <h3 className="text-5xl font-extrabold text-yellow-400">
                  {customers}+
                </h3>
                <p className="text-lg font-medium mt-2">Happy Customers</p>
              </div>

              {/* Awards */}
              <div className="bg-red-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                <h3 className="text-5xl font-extrabold text-yellow-400">
                  {awards}
                </h3>
                <p className="text-lg font-medium mt-2">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
