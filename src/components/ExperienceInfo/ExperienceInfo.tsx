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

        setExperience(Math.min(Math.floor(progress * 1), 1));
        setProjects(Math.min(Math.floor(progress * 15), 15));
        setCustomers(Math.min(Math.floor(progress * 3), 3));
        setAwards(Math.min(Math.floor(progress * 0), 0));

        if (frame === totalFrames) clearInterval(interval);
      }, increment);
    };

    animateCounters();
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className=" py-6">
        <h1 className="text-center text-5xl font-bold text-yellow-500 uppercase">
          Experience Info
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Personal Info Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-yellow-500 pb-2">
                Personal Info
              </h2>
              <ul className="space-y-6 text-lg">
                <div className="flex flex-wrap gap-6">
                  <div>
                    <li>
                      <span className="font-bold text-yellow-400">
                        First Name:
                      </span>{" "}
                      Md Samsel
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">
                        Last Name:
                      </span>{" "}
                      Arfin
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">
                        Nationality:
                      </span>{" "}
                      Bangladeshi
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">
                        Freelance:
                      </span>{" "}
                      Available
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">
                        Address:
                      </span>{" "}
                      Dhaka
                    </li>
                  </div>
                  <div>
                    <li>
                      <span className="font-bold text-yellow-400">Phone:</span>{" "}
                      +8801952-487468
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Email:</span>{" "}
                      <a
                        href="mailto:arfin.cse.green.edu.bd@gmail.com"
                        className="hover:text-yellow-500 transition duration-300"
                      >
                        arfin.cse.green.edu.bd@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Skype:</span>{" "}
                      arfin123
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">
                        Languages:
                      </span>{" "}
                      Bangla, English, Hindi
                    </li>
                  </div>
                </div>
              </ul>
            </div>

            {/* Counters Section */}
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                  <h3 className="text-5xl font-extrabold text-yellow-400">
                    {experience}+
                  </h3>
                  <p className="text-lg font-medium mt-2">
                    Years of Experience
                  </p>
                </div>

                <div className="bg-gray-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                  <h3 className="text-5xl font-extrabold text-yellow-400">
                    {projects}+
                  </h3>
                  <p className="text-lg font-medium mt-2">Completed Projects</p>
                </div>

                <div className="bg-gray-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                  <h3 className="text-5xl font-extrabold text-yellow-400">
                    {customers}+
                  </h3>
                  <p className="text-lg font-medium mt-2">Happy Customers</p>
                </div>

                <div className="bg-gray-900 hover:scale-105 transition-transform p-8 rounded-lg text-center shadow-md">
                  <h3 className="text-5xl font-extrabold text-yellow-400">
                    {awards}
                  </h3>
                  <p className="text-lg font-medium mt-2">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExperienceInfo;
