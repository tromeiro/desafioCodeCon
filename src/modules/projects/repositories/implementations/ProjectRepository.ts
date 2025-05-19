import IProject from "../../../../types/IProject";
import IProjectRepository from "../IProjectRepository";

import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";

@injectable()
class ProjectRepository implements IProjectRepository{
  constructor(@inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { };

  async create(project: IProject[]): Promise<number>{
    return 0;
  };
};

export default ProjectRepository;