import { Request, Response } from "express";
import { container } from "tsyringe";

import ActiveUsersUseCase from "./activeUsersUseCase";

const activeUserController = async (req: Request, res: Response) => {
  try{
    const useCase = container.resolve(ActiveUsersUseCase);
    const result = await useCase.execute();

    res.status(200).json({ result });
  }
  catch(err){
    console.error(err);
    res.status(500).json({ err });
  }
    
};
export default activeUserController;
