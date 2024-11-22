"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { Project } from "@/types";
import project1 from "../../UI/project/Projectphoto1.jpg";
import project2 from "../../UI/project/Projectphoto2.jpg";
import project3 from "../../UI/project/Projectphoto3.jpg";
import project4 from "../../UI/project/Projectphoto4.jpg";
import project5 from "../../UI/project/Projectphoto5.jpg";
import project6 from "../../UI/project/Projectphoto6.jpg";

const projects: Project[] = [
  {
    id: 1,
    title: "Sportz Car",
    image: project1,
    type: "Personal Project",
    projectType: "Website",
    technologies:
      "DaisyUI, React Router, JSON Web Token (JWT), Firebase, Tailwind CSS, React.js, MongoDB",
    description:
      "Sportz Car is a dynamic website that allows users to showcase and manage their collection of sports cars.",
    liveLink: "https://example.com/live",
    gitClient: "https://github.com/example-client",
    gitServer: "https://github.com/example-server",
  },
  {
    id: 2,
    title: "Job Hunter",
    image: project2,
    type: "Personal Project",
    projectType: "Website",
    technologies: "React, Tailwind CSS, Firebase",
    description:
      "Job Hunter is a platform that helps users search for their dream job by filtering through various categories.",
    liveLink: "https://example.com/live2",
    gitClient: "https://github.com/example-client2",
    gitServer: "https://github.com/example-server2",
  },
  {
    id: 3,
    title: "Job Hunter",
    image: project3,
    type: "Personal Project",
    projectType: "Website",
    technologies: "React, Tailwind CSS, Firebase",
    description:
      "Job Hunter is a platform that helps users search for their dream job by filtering through various categories.",
    liveLink: "https://example.com/live2",
    gitClient: "https://github.com/example-client2",
    gitServer: "https://github.com/example-server2",
  },
  {
    id: 4,
    title: "Job Hunter",
    image: project4,
    type: "Personal Project",
    projectType: "Website",
    technologies: "React, Tailwind CSS, Firebase",
    description:
      "Job Hunter is a platform that helps users search for their dream job by filtering through various categories.",
    liveLink: "https://example.com/live2",
    gitClient: "https://github.com/example-client2",
    gitServer: "https://github.com/example-server2",
  },
  {
    id: 5,
    title: "Job Hunter",
    image: project5,
    type: "Personal Project",
    projectType: "Website",
    technologies: "React, Tailwind CSS, Firebase",
    description:
      "Job Hunter is a platform that helps users search for their dream job by filtering through various categories.",
    liveLink: "https://example.com/live2",
    gitClient: "https://github.com/example-client2",
    gitServer: "https://github.com/example-server2",
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
    liveLink: "https://example.com/live2",
    gitClient: "https://github.com/example-client2",
    gitServer: "https://github.com/example-server2",
  },
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
    <div className="portfolio-container bg-gray-950 text-gray-800 p-6">
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
