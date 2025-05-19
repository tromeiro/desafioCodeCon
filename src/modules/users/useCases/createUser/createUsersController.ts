
import { Request, Response } from "express";

import IUser from "../../../../types/IUser";
import { container } from "tsyringe";
import CreateUsersUseCase from "./createUsersUseCase";

const userRouter = (req: Request, res: Response) => {

    if(!req.file){
        res.status(400).json({ error: "Sem arquivo em anexo" });
        return;
    };

    try{
      const file = buffer.toString();
      const users: IUser[] = JSON.parse(file);
      
      const useCase = container.resolve(CreateUsersUseCase);
      await useCase.execute(users);

      res.status(200).json({ message: 'Arquivo recebido'});

    }
    catch(err){
      res.status(500).json({ message: 'Erro ao ler arquivo'});
    }
        
};

export default userRouter;