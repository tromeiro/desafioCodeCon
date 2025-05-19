import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const superusersRouter = (req: Request, res: Response) => {
  const prisma = new PrismaClient(); 
  
  try{
    const result = prisma.users.count({
      
      
    })
      
    res.status(200).json({ result });
  }
  catch(err){
    res.status(500).json({ message: 'Erro ao acessar o banco'});
  }

};

export default superusersRouter;