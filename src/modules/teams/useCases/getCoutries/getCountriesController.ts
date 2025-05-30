import { container } from "tsyringe";
import { Request, Response } from "express";

import TopCoutriesUseCase from "./getCoutriesUseCase";

const countriesRouter = async (req: Request, res: Response) => {
  try{
   const useCase = container.resolve(TopCoutriesUseCase);
   const result = await useCase.execute();

   res.status(200).json({ result });
  }
  catch(err){
    res.status(500).json({ message: 'Erro ao acessar o banco'});
  }
};

export default countriesRouter;