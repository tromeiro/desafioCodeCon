import { container } from "tsyringe";
import { Request, Response } from "express";

import GetCoutriesUseCase from "./getTeamsUseCase";

const getTeamsController = async (req: Request, res: Response) => {
  try{
    const useCase = container.resolve(GetCoutriesUseCase);
    await useCase.execute();

  }
  catch(err){
    console.error(err);
    res.status(500).json({ err });
  }      
};

export default getTeamsController;