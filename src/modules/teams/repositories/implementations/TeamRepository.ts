import ITeam from "../../../../types/ITeam";
import ITeamInsights from "../ITeamInsights";
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

  async getCoutries(): Promise<Record<string, number>>{
    const coutries = await this.prisma.users.groupBy({
      by: ['country'],
      _count:{
        country: true
      },
      orderBy: {
        _count: {
          country: 'desc'
        },
      },
      where: { 
        score: { gte: 900 },
        active: true
      },
      take: 5
    });

    const total: Record<string, number> = {}
    
    for(const country of coutries)
      total[country.country] = country._count.country;

    return total;
  };

  async getTeamsInsights(): Promise<Record<string, ITeamInsights>>{
    const teamsInsights: Record<string, ITeamInsights> = {}

    const teams = await this.prisma.team.findMany();
    
    for(const team of teams){
      const totalMembers = await this.prisma.users.count({ where: { teamId: team.name } });
      const leaders = await this.prisma.users.count({ where: { teamId: team.name, leader: true }});
      const projects = await this.prisma.projects.count({ where: { teamId: team.name, completed: true } });
      const activeMembers = await this.prisma.users.count({ where: { teamId: team.name, active: true } }) / totalMembers;
      
      teamsInsights[team.name] = {totalMembers, leaders, projects, activeMembers};
    }

    return teamsInsights;
  }
};

export default TeamRepository;