const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-sky-900 to-black text-white ">
      <div className=" text-white">
        <div className="text-white">
          <h1 className=" flex justify-center items-center text-5xl font-bold text-yellow-500  pt-5 pb-3">
            About Me
          </h1>
          <p className="text-xl text-white ml-5">
            I am{" "}
            <span className="font-semibold text-yellow-600">
              Md Samsel Arfin
            </span>
            a passionate Full Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React, Node.js).
          </p>

          <p className="mt-6 text-lg text-white ml-5">
            I hold a Bachelor s degree in Computer Science & Engineering from
            Green University of Bangladesh. Over the past few years, I have
            honed my skills in full-stack development, focusing on JavaScript
            technologies like Node.js, Express.js, React, and MongoDB.
          </p>

          <p className="mt-6 text-lg text-white ml-5">
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
        <p className="mt-2 text-lg text-white ml-5">
          I am currently focusing on expanding my knowledge in advanced tools
          and frameworks like TypeScript, Mongoose, Next.js, AWS, and building
          high-performance, scalable applications.
        </p>
      </div>
    </div>
  );
};

export default About;
