import IUser from "../../../../types/IUser";
import IUserRepository from "../IUserRepository";

import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";

@injectable()
//implementação dos repositórios
class UserRepository implements IUserRepository{
  constructor(@inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) {}

  //acessar o banco do prisma para criar o usuario
  async create(users: IUser[]): Promise<number>{
    for(const user of users){
      await this.prisma.users.upsert({
        where: { id: user.id },
        update: { name: user.name },
        create: {
          id: user.id,
          name: user.name,
          age: user.age,
          score: user.score,
          active: user.active,
          country: user.country,
          leader: user.team.leader,
          teamId: user.team.name
        }
      });
    };

   return 0;
  };

  async getUsers(): Promise<IUser[]>{
    const superUsers: IUser[] = []
    /*await this.prisma.users.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        score: true,
        active: true,
        country: true,
        team: {
          select: { name: true }
        },
        logs: {
          select: { action: true }
        }
      },
      where: { 
        score: { gte: 900 },
        active: true
      },
      include: {
        team: {
          select: { name: true }
        },
        logs: {
          select: { action: true }
        }
      }
    });*/


    return superUsers;
  };

};

export default UserRepository;