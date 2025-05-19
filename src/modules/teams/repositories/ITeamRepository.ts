import ITeam from "../../../types/ITeam";

//interface para declarar assinatura das classes
interface ITeamRepository{
  
  create: (team: ITeam[]) => Promise<number>;
};

export default ITeamRepository;