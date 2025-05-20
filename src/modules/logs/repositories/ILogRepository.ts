import IUser from "../../../types/IUser";
interface ILogRepository{
  create: (users: IUser[]) => Promise<number>;
};

export default ILogRepository;