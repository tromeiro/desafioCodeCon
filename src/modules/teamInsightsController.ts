import { PrismaClient } from "@prisma/client";


const teamsRoute = (req, res) => {
  const prisma = new PrismaClient();

  try{
    const result = prisma.users.groupBy({
      by: [ team.name ],
      _count: {
        id: true,
        team: {
          leader: true
        },
        project: {
          completed: true
        },
        active: true
      }
    })

    res.status(200).json({ result });

  }
  catch(err){
    res.status(500).json({ message: 'Erro ao acessar o banco'});
  }
};

export default teamsRoute;