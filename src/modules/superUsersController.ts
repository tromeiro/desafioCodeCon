import { PrismaClient } from "@prisma/client";

const superusersRouter = (req, res) => {
  const prisma = new PrismaClient(); 
  
  try{
    const result = prisma.users.count({
      where: {
        users: {
          score: { gte: 900 },
          active: true
        }
      }
    })
      
    res.status(200).json({ result });
  }
  catch(err){
    res.status(500).json({ message: 'Erro ao acessar o banco'});
  }

};

export default superusersRouter;