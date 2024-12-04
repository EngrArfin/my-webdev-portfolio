import Image from "next/image";
import project1 from "../../../UI/project/Projectphoto7.jpg";
import project2 from "../../../UI/project/Projectphoto6.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "This is my personal portfolio website showcasing my projects and skills.",
      image: project1,
      githubClientLink: "https://github.com/yourusername/portfolio",
      githubServerLink: "https://github.com/yourusername/portfolio-backend",
      liveLink: "https://yourportfolio.com",
    },
    {
      id: 2,
      title: "E-commerce App",
      description:
        "A full-stack e-commerce website built with React, Next.js, MongoDB, and Stripe for payment processing.",
      image: project2,
      githubClientLink: "https://github.com/yourusername/ecommerce-client",
      githubServerLink: "https://github.com/yourusername/ecommerce-server",
      liveLink: "https://yourecommerce.com",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Your Projects
      </h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={project.githubClientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  GitHub Client Repository
                </a>
                <a
                  href={project.githubServerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  GitHub Server Repository
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  Live Demo
                </a>
              </div>

              <div className="mt-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Edit Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
