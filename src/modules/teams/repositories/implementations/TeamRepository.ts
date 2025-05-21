import ITeam from "../../../../types/ITeam";
import ITeamRepository from "../ITeamRepository";

import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";

@injectable()
class TeamRepository implements ITeamRepository { 
  constructor(@inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) {};

  async create(teams: ITeam[]): Promise<number> {
    for(const team of teams){
      await this.prisma.team.upsert({
        where: { name: team.name },
        update: { updatedAt: new Date().toISOString() },
        create: { 
          name: team.name,
          updatedAt: new Date().toISOString()
        }
      })
    }

    return 0;
  };

  async getCoutries(): Promise<number>{
    const coutries = await this.prisma.team.findMany({
      select: { users: { select: { country: true }}},
    });

    return 0;
  };

  async getTeamsInsights(): Promise<number>{
    const teams = await this.prisma.team.findMany({
      select: { users: { select: { country: true }}},
    });

    return 0;
  }
};

export default TeamRepository;