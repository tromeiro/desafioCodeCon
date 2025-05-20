import ITeam from "../../../../types/ITeam";
import prisma from "../../../../service/prisma-client";
import ITeamRepository from "../ITeamRepository";

import { inject, injectable } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";

@injectable()
class TeamRepository implements ITeamRepository { 
  constructor(@inject(PRISMA_CLIENT) private readonly pisma: PrismaClient) {};

  async create(teams: ITeam[]): Promise<number> {
    for(const team of teams) {
      prisma.team.upsert({
        where: { name: team.name },
        update: { },
        create: { name: team.name },
      });
    };
    return 0;
  };
};

export default TeamRepository;