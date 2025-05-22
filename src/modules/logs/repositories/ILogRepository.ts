import IUser from "../../../types/IUser";
interface ILogRepository{
  create: (users: IUser[]) => Promise<number>;
  activeUsers: () => Promise<Record<string, number>>; 
};

export default ILogRepository;