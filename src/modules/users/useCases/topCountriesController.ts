import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const countriesRouter = (req: Request, res: Response) => {
  const prisma = new PrismaClient();
 
  try{
   

  }
  catch(err){
    res.status(500).json({ message: 'Erro ao acessar o banco'});
  }

};

export default countriesRouter;