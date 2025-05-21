import ITeam from "../../../../types/ITeam";
import IProjectRepository from "../IProjectRepository";

import { inject, injectable } from "tsyringe";
import { Prisma, PrismaClient } from "@prisma/client";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";

@injectable()
class ProjectRepository implements IProjectRepository{
  constructor(@inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { };

  async create(teams: ITeam[]): Promise<number>{

    const projects: Prisma.ProjectsCreateManyInput[] = [];
    //const projects = []
    for(const team of teams){
      const mappedProjects = team.projects.map( project => ({ 
          name: project.name,
          completed: project.completed,
          teamId: team.name,
        }));

      projects.push(...mappedProjects);
    };

    await this.prisma.projects.createMany({ data: projects });
    return 0;
  };
};

export default ProjectRepository;