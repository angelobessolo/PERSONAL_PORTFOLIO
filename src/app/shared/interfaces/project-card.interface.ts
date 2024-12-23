import { StatusProject } from "../enums/status-project.enum";

export interface ProjectCard {
    videoPath: string;
    projectName: string;
    status: StatusProject;
    projectDescription: string;
    projectUrl: string;
    tags: {
        encabezado: string,
        tags: string[]
    };
}



