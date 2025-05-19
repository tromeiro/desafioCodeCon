import IUser from "../../../types/IUser";

//para assinaturas de classe
interface IUserRepository{
  findById(id: any): unknown;

  create: (user: IUser[]) => Promise<number>;
};

export default IUserRepository;