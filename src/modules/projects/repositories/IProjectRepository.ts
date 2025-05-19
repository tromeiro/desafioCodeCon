import IProject from "../../../types/IProject";

interface IProjectRepository{
  create: (project: IProject[]) => Promise<number>;

};

export default IProjectRepository;