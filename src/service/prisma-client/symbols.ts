import { PrismaClient } from "@prisma/client";
import { container } from "tsyringe";
import prisma from ".";


export const PRISMA_CLIENT = "Prisma";

container.register<PrismaClient>(PRISMA_CLIENT, { useValue: prisma });