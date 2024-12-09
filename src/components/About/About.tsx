import Image from "next/image";
import photo from "../../UI/img/arfin.jpeg";

const About = () => {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-center text-6xl font-bold text-[#FFD700] mb-8">
          About Me
        </h1>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src={photo}
              alt="Developer Avatar"
              className="rounded-lg shadow-lg w-80 h-auto"
              height="100"
              width="100"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-[#E0E0E0] leading-relaxed">
              Hello! I am a passionate Full Stack Developer with a strong
              background in MERN stack technologies—MongoDB, Express.js, React,
              and Node.js. I graduated with a Bachelor’s degree in Computer
              Science & Engineering from Green University of Bangladesh.
            </p>
            <p className="text-lg text-[#E0E0E0] leading-relaxed">
              Beyond coding, I am skilled in AutoCAD, Adobe Photoshop, WordPress
              development, and UI/UX design. I am always eager to learn new
              technologies and techniques.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 space-y-8">
          <h2 className="text-3xl font-semibold text-[#FFD700] text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#FFD700]">
                Full Stack Web Development
              </h3>
              <p className="text-lg text-[#D1D1D1]">
                I specialize in building responsive applications using the MERN
                stack and am advancing in TypeScript, Redux, Next.js, and more.
              </p>
              <p className="text-lg text-[#D1D1D1]">
                Key Skills: React, Node.js, MongoDB, Firebase, GraphQL, and AWS.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#FFD700]">
                Tools & Technologies
              </h3>
              <p className="text-lg text-[#D1D1D1]">
                Proficient in tools like Figma, GitHub, VS Code, and Jira for
                efficient project management and collaboration.
              </p>
              <p className="text-lg text-[#D1D1D1]">
                Tools: Figma, Git, Netlify, LaTex, AutoCAD, Adobe Photoshop.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-10 space-y-6">
          <h2 className="text-3xl font-semibold text-[#FFD700] text-center">
            Certifications & Courses
          </h2>
          <ul className="list-disc text-lg text-[#D1D1D1] pl-6">
            <li>MERN Stack Development - Programing Hero</li>
            <li>Software Quality Assurance - IEEE CSSBC</li>
            <li>Data Science with Python</li>
            <li>Microsoft Excel Certificate</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center bg-gray-900 p-6 rounded-lg shadow-md">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#FFD700]">
              Let’s Collaborate!
            </h3>
            <p className="text-[#E0E0E0] mt-2">
              Ready to bring your ideas to life with cutting-edge technology?
            </p>
          </div>
          <a
            href="#contact"
            className="mt-4 md:mt-0 px-6 py-3 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#FFC107] transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
