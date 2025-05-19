import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateTeamUseCase from "./createTeamUseCase";

const teamsRoute = (req: Request, res: Response) => {

  try{
    const useCase = container.resolve(CreateTeamUseCase);
    await useCase.execute();
    

    res.status(200).json({  });

  }
  catch(err){
    res.status(500).json({ message: 'Erro ao acessar o banco'});
  }
};

export default teamsRoute;