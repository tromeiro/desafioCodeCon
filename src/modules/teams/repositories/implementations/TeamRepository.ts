import ITeam from "../../../../types/ITeam";
import ITeamRepository from "../ITeamRepository";

import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";


@injectable()
class TeamRepository implements ITeamRepository { 
  constructor(@inject(PRISMA_CLIENT) private readonly pisma: PrismaClient) {}

  async create(team: ITeam[]): Promise<number> {
    
    return 0;
  };
};

export default TeamRepository;