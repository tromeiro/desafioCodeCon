import { PrismaClient } from "@prisma/client";
import multer from "multer";


const userRouter = (req, res) => {
    const prisma = new PrismaClient(); 

    if(!req.file){
        res.status(400).json({ error: "Sem arquivo em anexo" }) 
    };

    try{
      const user = prisma.user.create({ data: (req.file) });

      
      
      res.status(200).json({ message: 'Arquivo recebido'});
    }
    catch(err){
      res.status(500).json({ message: 'Erro ao ler arquivo'});
    }
        
};
export default userRouter;