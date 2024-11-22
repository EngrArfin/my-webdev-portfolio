import { IoBagCheck, IoSchoolSharp } from "react-icons/io5";

const ExpEduAchive: React.FC = () => {
  const experience = [
    {
      yearRange: "2024 - Present",
      role: "Full Stack Developer(MERN-stack)",
      company: "Programing Hero",
      description:
        "I have started a new journey here in Programming Hero Level course. To become a MERN full stack developer. ",
      skill:
        "TypeScript, Mongoose, Redux, Next.Js, GraphQL, Post-greSQL, AWS, Docker, Unit Testing",
    },
    {
      yearRange: "2022 - Present",
      role: "MERN Stack Developer",
      company: "Freelance",
      description:
        "As a freelance MERN stack developer, I have been leveraging my expertise in MongoDB, Express.js, React.js, and Node.js to create robust and scalable web applications. I have successfully collaborated with clients to deliver high-quality solutions that meet their specific business needs.",
      skill:
        "HTML, CSS, React, Bootstrap, Tailwind CSS,JavaScript, Node Js, Express Js, MongoDB, Firebase",
    },
    {
      yearRange: "2019 - 2021",
      role: "WordPress Developer",
      company: "DigitalPulp Services",
      description:
        "Specialized in building and customizing WordPress websites to meet client requirements and deliver seamless user experiences.",
      skill:
        "WordPress Core, Theme Development, Plugin Development, HTML, CSS, JavaScript, PHP, MySQL, WooCommerce, REST API Integration, Page Builders (Elementor, Divi, WPBakery), SEO Optimization, Website Security, Performance Optimization, Responsive Design, Git (Version Control), Hosting and Deployment, Debugging and Troubleshooting",
    },
    {
      yearRange: "2018 - 2020",
      role: "Digital Marketing",
      company: "Online Services",
      description:
        "Specialized in building and customizing WordPress websites to meet client requirements and deliver seamless user experiences.",
      skill:
        "Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing (SMM), Content Marketing, Email Marketing",
    },
  ];

  const education = [
    {
      year: "2023",
      degree: "B.Sc. in CSE",
      institution: "Green University of Bangladesh",
      description:
        "Possess a strong foundation in both theoretical knowledge and practical skills, equipping me to excel in the field and tackle complex technical challenges.I earned my B.Sc in Computer Science and Engineering from Green University of Bangladesh. My education has equipped me with a strong theoretical foundation and practical skills, enabling me to excel in the field of technology. I am passionate about using my expertise to drive meaningful advancements in the tech industry",
    },
    {
      year: "2018",
      degree: "H.S.C.",
      institution: "Aminur Rahman College, Magura",
      description:
        "Achieved an outstanding GPA of 4.33 out of 5.During my time at Aminur Rohamman College in Mohammadpur, pursuing the HSC (Intermediate Level) in the Science Group, I had the opportunity to delve into the fascinating world of science and mathematics. This pivotal phase of my education not only expanded my academic horizons but also ignited a passion for scientific inquiry and discovery. I engaged in rigorous coursework, collaborated with peers, and developed essential skills that continue to shape my educational journey. ",
    },
    {
      year: "2013",
      degree: "S.S.C.",
      institution: "Digha Intaz Mollah High School",
      description:
        "Achieved a perfect GPA of 5.00 out of 5.Building upon the strong academic foundation laid during my SSC Science years at Digha High School, my HSC (Higher Secondary Certificate) journey has been marked by growth, discovery, and a deeper exploration of scientific principles. With dedicated teachers and a nurturing learning environment, I have continued to expand my knowledge in the sciences, honed my analytical skills, and prepared myself for the challenges and opportunities that lie ahead. My experience at Digha High School has not only fostered a love for learning",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "black",
        color: "#fff",
        padding: "2rem",
      }}
    >
      <title>Portfolio</title>

      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#FFD700",
        }}
      >
        Education & Experience
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* Experience Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1rem",
              color: "#FFD700",
            }}
          >
            Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "20px", height: "20px" }}>
                    <IoBagCheck />
                  </div>
                </div>
                <p style={{ color: "#aaa", fontWeight: "bold" }}>
                  {exp.yearRange}
                </p>
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  margin: "0.5rem 0",
                  color: "#fff",
                }}
              >
                {exp.role}{" "}
                <span style={{ color: "#FFD700" }}>— {exp.company}</span>
              </h3>
              <p style={{ color: "#ccc", fontSize: "0.95rem" }}>
                {exp.description}
              </p>
              <p style={{ color: "#ccc", fontSize: "0.95rem", marginTop: 10 }}>
                Skill: {exp.skill}
              </p>
            </div>
          ))}
        </div>

        {/* Education Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1rem",
              color: "#FFD700",
            }}
          >
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "20px", height: "20px" }}>
                    <IoSchoolSharp />
                  </div>
                </div>
                <p style={{ color: "#aaa", fontWeight: "bold" }}>{edu.year}</p>
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  margin: "0.5rem 0",
                  color: "#fff",
                }}
              >
                {edu.degree}{" "}
                <span style={{ color: "#FFD700" }}> {edu.institution}</span>
              </h3>
              <p style={{ color: "#ccc", fontSize: "0.95rem" }}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpEduAchive;
