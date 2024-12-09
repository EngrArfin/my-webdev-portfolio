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

// types/index.ts
export interface TService {
  _id: string;
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}

export interface TServiceDetails {
  _id: string;

  title: string;
  content: string;
  date: string;
  image: string;
}
