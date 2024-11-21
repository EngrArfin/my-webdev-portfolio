const About = () => {
  return (
    <div className="text-white m-5">
      <div className=" text-white">
        {/* Left Side: Personal Information */}
        <div className="text-white">
          <h1 className=" flex justify-center items-center text-5xl font-bold text-yellow-500 mt-5 mb-3">
            About Me
          </h1>
          <p className="text-xl text-white">
            I am{" "}
            <span className="font-semibold text-yellow-600">
              Md Samsel Arfin
            </span>
            a passionate Full Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React, Node.js).
          </p>

          <p className="mt-6 text-lg text-white">
            I hold a Bachelor s degree in Computer Science & Engineering from
            Green University of Bangladesh. Over the past few years, I have
            honed my skills in full-stack development, focusing on JavaScript
            technologies like Node.js, Express.js, React, and MongoDB.
          </p>

          <p className="mt-6 text-lg text-white">
            In addition to my technical expertise, I am skilled in UI/UX design,
            WordPress development, and Digital Marketing. I am constantly
            learning new technologies to stay ahead and provide innovative,
            scalable solutions for my clients.
          </p>
        </div>
      </div>
      <div>
        <h2 className="flex justify-center items-center text-3xl font-bold text-yellow-500 mt-5 mb-3">
          Current Focus
        </h2>
        <p className="mt-2 text-lg text-white">
          I am currently focusing on expanding my knowledge in advanced tools
          and frameworks like TypeScript, Mongoose, Next.js, AWS, and building
          high-performance, scalable applications.
        </p>
      </div>

      {/* Left Side: Personal Information */}

      <div>
        <h2 className="flex justify-center items-center text-3xl font-bold text-yellow-500">
          Experience/info
        </h2>
        <div className="min-h-screen  text-white flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Personal Infos</h2>
                <ul className="  space-y-4 text-lg">
                  <div className="flex ">
                    <div>
                      <li>
                        <span className="font-bold">First Name:</span> Md Samsel
                      </li>
                      <li>
                        <span className="font-bold">Last Name:</span> Arfin
                      </li>

                      <li>
                        <span className="font-bold">Nationality:</span>{" "}
                        Bangladeshi
                      </li>
                      <li>
                        <span className="font-bold">Freelance:</span> Available
                      </li>
                      <li>
                        <span className="font-bold">Address:</span> Dhaka
                      </li>
                    </div>
                    <div className="ml-10">
                      <li>
                        <span className="font-bold">Phone:</span>{" "}
                        +8801952-487468
                      </li>
                      <li>
                        <span className="font-bold">Email:</span>{" "}
                        <a
                          href="arfin.cse.green.edu.bd@gmail.com"
                          className="text-yellow-400 underline"
                        >
                          arfin.cse.green.edu.bd@gmail.com
                        </a>
                      </li>
                      <li>
                        <span className="font-bold">Skype:</span> arfin123
                      </li>
                      <li>
                        <span className="font-bold">Languages:</span> Bangla,
                        English
                      </li>
                    </div>
                  </div>
                </ul>
              </div>

              {/* Right Side: Experience and Achievements */}
              <div>
                <div className="grid grid-cols-2 gap-6">
                  {/* Cards */}
                  <div className="bg-yellow-500 p-6 rounded-lg text-center shadow-md">
                    <h3 className="text-5xl font-extrabold text-black">2+</h3>
                    <p className="text-lg font-medium text-gray-900 mt-2">
                      Years of Experience
                    </p>
                  </div>
                  <div className="bg-yellow-500 p-6 rounded-lg text-center shadow-md">
                    <h3 className="text-5xl font-extrabold text-black">15+</h3>
                    <p className="text-lg font-medium text-gray-900 mt-2">
                      Completed Projects
                    </p>
                  </div>
                  <div className="bg-yellow-500 p-6 rounded-lg text-center shadow-md">
                    <h3 className="text-5xl font-extrabold text-black">5+</h3>
                    <p className="text-lg font-medium text-gray-900 mt-2">
                      Happy Customers
                    </p>
                  </div>
                  <div className="bg-yellow-500 p-6 rounded-lg text-center shadow-md">
                    <h3 className="text-5xl font-extrabold text-black">0+</h3>
                    <p className="text-lg font-medium text-gray-900 mt-2">
                      Awards Won
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
