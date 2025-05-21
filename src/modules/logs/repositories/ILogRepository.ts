import IUser from "../../../types/IUser";
interface ILogRepository{
  create: (users: IUser[]) => Promise<number>;
  activeUsers: () => Promise<number>; 
};

export default ILogRepository;