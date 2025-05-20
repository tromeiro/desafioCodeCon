import IUser from "../../../types/IUser";
interface IUserRepository{
  //para assinaturas de classe
  create: (user: IUser[]) => Promise<number>;
};

export default IUserRepository;