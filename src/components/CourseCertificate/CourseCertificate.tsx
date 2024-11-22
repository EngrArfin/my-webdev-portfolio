"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PiCertificateFill } from "react-icons/pi";

import certificate1 from "../../UI/certificate/1ProgramingHero.jpg";
import certificate2 from "../../UI/certificate/2SoftwareTest.jpg";
import certificate3 from "../../UI/certificate/3msword.jpg";
import certificate4 from "../../UI/certificate/4degitalmarketing.jpg";
import certificate5 from "../../UI/certificate/5datasciencepython.jpg";
import certificate6 from "../../UI/certificate/6MycrosoftExcell.jpg";
import certificate7 from "../../UI/certificate/7PowerpointCertificate.jpg";
import certificate8 from "../../UI/certificate/8Robotics.jpg";
import certificate9 from "../../UI/certificate/9Nagorik.jpg";

const certificates = [
  {
    id: 1,
    title: "Advanced Full-Stack Development with MERN Stack (Programming Hero)",
    description:
      "As part of the Programming Hero Level course, I have embarked on a journey to master the MERN stack (MongoDB, Express.js, React, Node.js). This program equips me with the skills to build dynamic and scalable web applications. I have learned key technologies like TypeScript, Mongoose for data modeling, Redux for state management, Next.js for server-side rendering, GraphQL for APIs, PostgreSQL for database management, AWS for cloud services, Docker for containerization, and Unit Testing to ensure software quality. By completing this program, I am preparing myself to be a proficient MERN stack developer.",
    image: certificate1,
  },
  {
    id: 2,
    title: "Software Quality Assurance & Test Automation Expert",
    description:
      "In this course, I gained comprehensive knowledge about the essentials of Software Quality Assurance (SQA) and Test Automation. This program involved working on a variety of real-world projects, including a web application that visualizes personalized Spotify data. The app allows users to view their top artists, top tracks, recently played tracks, and detailed audio information. I also worked on creating and saving new playlists based on users' existing playlists, applying industry-standard testing tools and methodologies to ensure the software works efficiently and reliably.",
    image: certificate2,
  },
  {
    id: 3,
    title: "Microsoft Word Advanced Certification",
    description:
      "I successfully completed an advanced certification course in Microsoft Word, where I gained deep insights into its powerful features for document creation, editing, and formatting. This training enhanced my skills in working with professional documents, incorporating advanced formatting techniques, creating templates, using styles, and integrating Word with other Microsoft Office tools. This certification showcases my proficiency in using Word for effective document management and professional communication.",
    image: certificate3,
  },
  {
    id: 4,
    title: "Comprehensive Digital Marketing Strategy & Execution",
    description:
      "This certification program helped me master various aspects of digital marketing, including social media marketing, search engine optimization (SEO), online advertising, and content strategy. I developed a solid understanding of how to create impactful campaigns across different digital platforms, including Google Ads, Facebook, and Instagram. I also learned how to analyze metrics and measure campaign performance to optimize marketing strategies for businesses and brands, thus ensuring the best ROI from digital marketing efforts.",
    image: certificate4,
  },
  {
    id: 5,
    title: "Data Science and Machine Learning with Python",
    description:
      "In this course, I delved into the world of data science using Python. I learned how to work with various data analysis and visualization libraries such as Pandas, Matplotlib, and Seaborn to extract valuable insights from data. Additionally, I explored machine learning algorithms, including linear regression, decision trees, and clustering, enabling me to develop predictive models. This certification has equipped me with the skills to analyze large datasets, build machine learning models, and present actionable insights to solve real-world business problems.",
    image: certificate5,
  },
  {
    id: 6,
    title: "Advanced Microsoft Excel Certification for Data Analysis",
    description:
      "I completed an advanced training program in Microsoft Excel, focusing on using Excel's powerful data analysis tools. The course covered topics such as pivot tables, advanced formulas, data visualization, and statistical analysis. I gained expertise in automating repetitive tasks with macros and utilizing Excel to generate insightful reports for business decision-making. This certification demonstrates my ability to handle large datasets, perform complex calculations, and present data-driven insights using Excel.",
    image: certificate6,
  },
  {
    id: 7,
    title: "Advanced PowerPoint Presentation Design and Techniques",
    description:
      "This certification program helped me develop advanced skills in creating professional and visually impactful PowerPoint presentations. I learned how to design custom templates, incorporate multimedia, use animation effects, and craft compelling narratives to engage audiences. I also gained expertise in using PowerPoint for corporate presentations, training sessions, and conferences. This certification reflects my ability to deliver high-quality presentations that communicate complex information clearly and effectively.",
    image: certificate7,
  },
  {
    id: 8,
    title: "Robotics and Automation Systems Development Training",
    description:
      "Through this course, I acquired hands-on experience in building and programming robots for automation systems. I learned the fundamentals of robotics, including the use of sensors, actuators, and controllers to build functional robots. I also gained experience in programming robotics systems using popular languages such as Python and C++. The training gave me a strong understanding of how robotics can be applied to industrial automation, manufacturing, and even everyday tasks.",
    image: certificate8,
  },
  {
    id: 9,
    title:
      "Community Leadership and Social Responsibility (Nagorik Certificate)",
    description:
      "I received the Nagorik Certificate in recognition of my contributions to community service and leadership. This award acknowledges my active participation in various social initiatives and community development projects. I have been involved in organizing events, providing support to underprivileged communities, and promoting awareness about important social issues. This certification represents my commitment to making a positive impact in society through leadership and social responsibility.",
    image: certificate9,
  },
];

const CourseCertificate = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      certificates.forEach((_, index) => {
        const element = document.getElementById(`certificate-${index}`);
        if (element && element.offsetTop < scrollPosition) {
          setVisibleIndex((prev) => Math.max(prev, index));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" min-h-screen bg-gradient-to-b from-gray-950 via-sky-900 to-black text-white flex flex-col justify-center items-center py-16">
      <div className="ml-10 container mx-auto px-4 space-y-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
          Certificates & Achievements
        </h1>

        {certificates.map((certificate, index) => (
          <div
            id={`certificate-${index}`}
            key={certificate.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 transition-all duration-700 transform ${
              visibleIndex >= index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="md:w-1/2 text-center md:text-left space-y-2">
              <h2 className="text-2xl text-yellow-400 font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                <PiCertificateFill /> {certificate.title}
              </h2>
              <p className="text-sm text-gray-300 whitespace-pre-line">
                {certificate.description}
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-80 h-60 bg-purple-800 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  height={300}
                  width={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCertificate;
