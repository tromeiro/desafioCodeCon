import IUser from "../../../../types/IUser";
import ILogRepository from "../ILogRepository";

import { inject, injectable } from "tsyringe";
import { Prisma, PrismaClient } from "@prisma/client";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";
@injectable()
class LogRepository implements ILogRepository{
  constructor(@inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { };

  async create(users: IUser[]): Promise<number>{
    const logIn: Prisma.LogCreateManyInput[] = [];
    
    for(const user of users){
      const mappedLogs = user.logs.map( log => ({
        date: log.date,
        action: log.action,
        userId: user.id,
      }));

      logIn.push(...mappedLogs);
    };

    await this.prisma.log.createMany({ data: logIn });

    return 0;
  };

  async activeUsers(): Promise<Record<string, number>>{
    const logins = await this.prisma.log.groupBy({
      by: ['date'],
      where: { action: 'login' },
      _count: { action: true }
    });

    const total: Record<string, number> = {}
    
    for(const log of logins)
      total[log.date] = log._count.action;

    return total;
  };
};

export default LogRepository;