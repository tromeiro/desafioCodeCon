import { container } from "tsyringe";
import { Request, Response } from "express";

import GetTeamsUseCase from "./getTeamsUseCase";

const getTeamsController = async (req: Request, res: Response) => {
  try{
    const useCase = container.resolve(GetTeamsUseCase);
    const result = await useCase.execute();

    res.status(200).json({ result });
  }
  catch(err){
    console.error(err);
    res.status(500).json({ err });
  }      
};

export default getTeamsController;