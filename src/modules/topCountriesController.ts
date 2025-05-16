import { PrismaClient } from "@prisma/client";


const countriesRouter = (req, res) => {
  const prisma = new PrismaClient();
  
  try{
    const result = prisma.users.aggregate({
      _count: {
        users: {
          country: true
        }
      },
      limit: 5
    })

    res.status(200).json({ result });

  }
  catch(err){
    res.status(500).json({ message: 'Erro ao acessar o banco'});
  }

};

export default countriesRouter;