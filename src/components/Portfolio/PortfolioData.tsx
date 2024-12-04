"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { Project } from "@/types";
import project1 from "../../UI/project/Projectphoto1.jpg";
import project2 from "../../UI/project/Projectphoto2.jpg";
import project3 from "../../UI/project/Projectphoto3.jpg";
/* import project4 from "../../UI/project/Projectphoto4.jpg";
import project5 from "../../UI/project/Projectphoto5.jpg";
import project6 from "../../UI/project/Projectphoto6.jpg"; */

const projects: Project[] = [
  {
    id: 1,
    title: "E Com Zone: E-Commerce Online Platform",
    image: project1,
    type: "Personal Project",
    projectType: " E Commerce Website",
    technologies:
      "Next.js · TypeScript, Tailwind CSS, Express.js · MongoDB · NextAuth · axios js · ESLint , DaisyUI, JSON Web Token (JWT)",
    description:
      "E Com Zone is a modern, responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS. It integrates secure user authentication, dynamic product management, and a streamlined shopping experience ",
    liveLink: "https://e-commerce-web-nextjs-client-app.vercel.app/",
    gitClient: "https://github.com/EngrArfin/e-commerce-web-nextjs-client-app",
    gitServer: "https://github.com/example-server",
  },
  {
    id: 2,
    title: "Meeting Room Booking System ",
    image: project2,
    type: "Personal Project",
    projectType: "Website",
    technologies:
      "Frontend: React, Redux, Axios, Tailwaind CSS, jwt-decode, Ant Design,react-dom Backend: TypeScript, Node, Express, MongoDB, Mongoose, Zod.",
    description:
      "Meeting rooms, built with React, Redux, and Node.js. It features secure authentication via NextAuth, dynamic room availability, and booking management. The backend uses Express and MongoDB for data handling, with Axios for seamless API integration. Designed for efficiency and responsiveness. and  TypeScript-based backend for managing room bookings, built with Node.js, Express, and MongoDB. Features secure NextAuth authentication, RESTful APIs for booking and room management, and robust data handling.",
    liveLink: "https://meeting-room-booking-systrm-client-app.vercel.app/",
    gitClient:
      "https://github.com/EngrArfin/meeting-room-booking-systrm-client-app",
    gitServer: "https://github.com/EngrArfin/meeting-room-booking-system",
  },
  {
    id: 3,
    title: "SAR Shop(E-Commerce Website for Clothing Fashion and Electronic)",
    image: project3,
    type: "Personal Project",
    projectType: "Website",
    technologies:
      " HTML, CSS, Tailwind CSS,  Express.js, MongoDB, Firebase, axios js, JWT, stipe.js,  DaisyUI",
    description:
      "SAR Shop Frontend is a responsive e-commerce application for clothing and electronics. Built with React, HTML, CSS, Tailwind CSS, and DaisyUI, it offers a sleek design, Firebase authentication, and seamless API integration via Axios.",
    liveLink: "https://job-task-6e505.web.app",
    gitClient: "https://github.com/EngrArfin/job-task-shop-client",
    gitServer: "https://github.com/EngrArfin/job-task-shop-server",
  },
  /* {
    id: 4,
    title: "SA Food Restaurant",
    image: project4,
    type: "Personal Project",
    projectType: "Website",
    technologies:
      "HTML · CSS · Tailwind CSS · React · Express.js · MongoDB · Firebase · JWT · Bootstrap · stripe.js",
    description:
      "SA Food Restaurant is project leverages technologies such as HTML, CSS, Tailwind CSS, DaisyUI, and React to create an elegant and responsive user interface. The back-end integration with Express.js and MongoDB ensures smooth data handling, while Firebase enhances authentication and real-time features. The application utilizes Axios.js for efficient API communication, JWT for secure user sessions, and Stripe.js for seamless payment processing.",
    liveLink: " https://sa-food-reasturent.netlify.app/",
    gitClient: "https://github.com/EngrArfin/bistro-boss-client",
    gitServer: "https://github.com/EngrArfin/bistro-boss-server",
  },
  {
    id: 5,
    title: "Health Complex -Hospital-Magura",
    image: project5,
    type: "Hospital Project",
    projectType: "Website",
    technologies:
      "HTML5, CSS, Tailwind CSS, JavaScript,  Express.js, Firebase, MongoDB, Reactjs, JWT",
    description:
      "Hospital's range of medical services includes general medicine, surgery, emergency services and specialized care in various fields and aims to provide digital services.",
    liveLink: "https://mohammadpur-hospital-magura.netlify.app/",
    gitClient: "https://github.com/EngrArfin/doctor-house-client",
    gitServer: "https://github.com/EngrArfin/doctor-house-server",
  },
  {
    id: 6,
    title: "Job Hunter",
    image: project6,
    type: "Personal Project",
    projectType: "Website",
    technologies: "React, Tailwind CSS, Firebase",
    description:
      "Job Hunter is a platform that helps users search for their dream job by filtering through various categories.",
    liveLink: "https://aiaffibot.xyz",
    gitClient: "https://github.com/example-client2",
    gitServer: "https://github.com/example-server2",
  }, */
];

const PortfolioData = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && document.getElementById("__next")) {
      Modal.setAppElement("#__next");
    }
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container bg-gradient-to-b from-gray-950 via-sky-900 to-black text-white p-6">
      <h1 className="text-4xl text-yellow-400 font-bold text-center mb-8">
        My Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-white shadow-md rounded-md overflow-hidden cursor-pointer"
            onClick={() => openModal(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            content: {
              maxWidth: "700px",
              margin: "auto",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            {selectedProject.title}
          </h2>
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            width={700}
            height={400}
            className="rounded-md mb-4"
          />
          <p className="mb-2">
            <strong>Technologies:</strong> {selectedProject.technologies}
          </p>
          <p>{selectedProject.description}</p>
          <div className="mt-4 space-x-4">
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              🔗 Live Link
            </a>

            <a
              href={selectedProject.gitClient}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              💻 Git Client
            </a>
            <a
              href={selectedProject.gitServer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              💻 Git Server
            </a>
          </div>
          <button
            onClick={closeModal}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default PortfolioData;
