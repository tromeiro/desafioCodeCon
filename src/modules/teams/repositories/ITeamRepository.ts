import ITeam from "../../../types/ITeam";
interface ITeamRepository{
  //interface para declarar assinatura das classes
  create: (team: ITeam[]) => Promise<number>;
};

export default ITeamRepository;