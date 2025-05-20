import IUser from "../../../../types/IUser";
import ILogRepository from "../ILogRepository";

import { inject, injectable } from "tsyringe";
import { Prisma, PrismaClient } from "@prisma/client";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";

@injectable()
class LogRepository implements ILogRepository{
  constructor(@inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { };

  async create(users: IUser[]): Promise<number>{
    const logsIn: Prisma.LogCreateManyInput[] = [];

    for(const user of users){
      const mappedLogs = user.logs.map( log => ({
        date: log.date,
        action: log.action,
        userId: log.userId,
      }));

      logsIn.push(...mappedLogs);
    };

    await this.prisma.log.createMany({ data: logsIn })
    return 0;
  };
}

export default LogRepository;