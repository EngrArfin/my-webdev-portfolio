"use client";

import { IoBagCheck, IoSchoolSharp } from "react-icons/io5";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Define your data types
interface ExperienceItem {
  yearRange: string;
  role: string;
  company: string;
  description: string;
  skill: string;
}

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  description: string;
}

// CardItem component
const CardItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  skill?: string;
}> = ({ icon, title, subtitle, description, skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, { opacity: 0, y: 50, duration: 1 });
    }
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      if (isHovered) {
        gsap.to(cardRef.current, {
          scale: 1.05,
          backgroundColor: "#1a202c",
          duration: 0.3,
        });
      } else {
        gsap.to(cardRef.current, {
          scale: 1,
          backgroundColor: "#2d3748",
          duration: 0.3,
        });
      }
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      style={{
        marginBottom: "1.5rem",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        transition: "transform 0.3s, background-color 0.3s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{
            width: "35px",
            height: "35px",
            backgroundColor: "yellow",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
        <p style={{ color: "#aaa", fontWeight: "bold" }}>{title}</p>
      </div>
      <h3 style={{ fontSize: "1.2rem", margin: "0.5rem 0", color: "#fff" }}>
        {subtitle}
      </h3>
      <p style={{ color: "#ccc", fontSize: "0.95rem" }}>{description}</p>
      {skill && (
        <p style={{ color: "#ccc", fontSize: "0.95rem", marginTop: 10 }}>
          Skill: {skill}
        </p>
      )}
    </div>
  );
};

// ExpEduAchive component
const ExpEduAchive: React.FC = () => {
  const experience: ExperienceItem[] = [
    {
      yearRange: "2024 - Present",
      role: "Full Stack Developer (MERN-stack)",
      company: "Programming Hero",
      description:
        "I have started a new journey here in Programming Hero Level course to become a MERN full-stack developer.",
      skill:
        "TypeScript, Mongoose, Redux, Next.Js, GraphQL, Post-greSQL, AWS, Docker, Unit Testing",
    },
    {
      yearRange: "2022 - Present",
      role: "MERN Stack Developer",
      company: "Freelance",
      description:
        "As a freelance MERN stack developer, I have been leveraging my expertise in MongoDB, Express.js, React.js, and Node.js to create robust and scalable web applications.",
      skill:
        "HTML, CSS, React, Bootstrap, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB, Firebase",
    },
    {
      yearRange: "2019 - 2021",
      role: "WordPress Developer",
      company: "DigitalPulp Services",
      description:
        "Specialized in building and customizing WordPress websites to meet client requirements and deliver seamless user experiences.",
      skill:
        "WordPress Core, Theme Development, Plugin Development, HTML, CSS, JavaScript, PHP, MySQL, WooCommerce, REST API Integration, Page Builders (Elementor, Divi, WPBakery), SEO Optimization, Website Security",
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

  const education: EducationItem[] = [
    {
      year: "2023",
      degree: "B.Sc. in CSE",
      institution: "Green University of Bangladesh",
      description:
        "Completed my bachelor's degree in Computer Science and Engineering with a focus on software development, data structures, algorithms, and database management. Gained hands-on experience through various projects, internships, and group collaborations. My studies provided me with a strong technical background and prepared me to solve real-world problems in the tech industry.",
    },
    {
      year: "2018",
      degree: "H.S.C.",
      institution: "Aminur Rahman College, Magura",
      description:
        "Studied in the Science group, developing a deep understanding of physics, chemistry, and mathematics. This period helped me build strong analytical and problem-solving skills while fostering an interest in technology and innovation. I actively participated in academic events, science fairs, and extracurricular activities, which enhanced my critical thinking and teamwork abilities.",
    },
    {
      year: "2013",
      degree: "S.S.C.",
      institution: "Digha Intaz Mollah High School",
      description:
        "Completed secondary education with a strong focus on science subjects. This phase laid the foundation for my academic journey and instilled a passion for learning and discovery. I actively engaged in school activities, including debates, cultural programs, and science exhibitions, which helped me develop communication and leadership skills alongside academic excellence.",
    },
  ];

  return (
    <div className="mt-1  flex flex-col md:flex-row justify-between items-center bg-gray-950 p-6 rounded-lg shadow-md">
      <div
        className="bg-gray-950 text-white"
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "2rem",
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
          {/* Experience Section */}
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
              <CardItem
                key={index}
                icon={<IoBagCheck style={{ color: "#111827" }} />} // Icon color yellow
                title={exp.yearRange}
                subtitle={`${exp.role} — ${exp.company}`}
                description={exp.description}
                skill={exp.skill}
              />
            ))}
          </div>

          {/* Education Section */}
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
              <CardItem
                key={index}
                icon={<IoSchoolSharp style={{ color: "#111827" }} />} // Icon color yellow
                title={edu.year}
                subtitle={`${edu.degree} — ${edu.institution}`}
                description={edu.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpEduAchive;
