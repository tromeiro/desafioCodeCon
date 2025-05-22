import ITeam from "../../../types/ITeam";
import ITeamInsights from "./ITeamInsights";
interface ITeamRepository{
  //interface para declarar assinatura das classes
  create: (team: ITeam[]) => Promise<number>;
  getCoutries: () => Promise<Record<string, number>>;
  getTeamsInsights: () => Promise<Record<string, ITeamInsights>>;
};

export default ITeamRepository;