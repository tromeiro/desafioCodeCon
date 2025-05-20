
import { container } from "tsyringe";
import { Request, Response } from "express";

import IUser from "../../../../types/IUser";
import CreateUsersUseCase from "./createUsersUseCase";

const userRouter = async (req: Request, res: Response) => {

    if(!req.file){
        res.status(400).json({ error: "Sem arquivo em anexo" });
        return;
    };

    try{
      const file = req.file.buffer;
      const fileUsers = file.toString();
      const users: IUser[] = JSON.parse(fileUsers);
      
      const useCase = container.resolve(CreateUsersUseCase);
      await useCase.execute(users);

      res.status(200).json({ message: 'Arquivo recebido'});

    }
    catch(err){
      res.status(500).json({ message: 'Erro ao ler arquivo'});
    }
        
};

export default userRouter;