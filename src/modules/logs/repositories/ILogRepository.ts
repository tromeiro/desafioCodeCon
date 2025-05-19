import ILog from "../../../types/ILog";

interface ILogRepository{
  create: (log: ILog[]) => Promise<number>;

};

export default ILogRepository;