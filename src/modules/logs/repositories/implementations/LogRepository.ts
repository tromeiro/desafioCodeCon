import ILog from "../../../../types/ILog";
import ILogRepository from "../ILogRepository";

import { inject, injectable } from "tsyringe";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";
import { PrismaClient } from "@prisma/client";

@injectable()
class LogRepository implements ILogRepository{
  constructor(@inject(PRISMA_CLIENT) private readonly pisma: PrismaClient) { };

  async create(log: ILog[]): Promise<number>{
    return 0;
  };
}

export default LogRepository;