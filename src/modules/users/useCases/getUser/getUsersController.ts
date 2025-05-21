import { container } from "tsyringe";
import { Request, Response } from "express";

import SuperUsersUseCase from "./getUserUseCase";

const superusersRouter = async (req: Request, res: Response) => {
  
  try{
    const useCase = container.resolve(SuperUsersUseCase);
    const result = useCase.execute();
      
    res.status(200).json({ result });
  }
  catch(err){
    res.status(500).json({ err });
  }

};

export default superusersRouter;