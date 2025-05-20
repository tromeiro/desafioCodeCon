import ITeam from "../../../types/ITeam";
interface IProjectRepository{
  create: (project: ITeam[]) => Promise<number>;
};

export default IProjectRepository;