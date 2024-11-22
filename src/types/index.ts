import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  image: StaticImageData;
  type: string;
  projectType: string;
  technologies: string;
  description: string;
  liveLink: string;
  gitClient: string;
  gitServer: string;
}
