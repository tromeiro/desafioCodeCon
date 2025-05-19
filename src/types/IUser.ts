import ILog from "./ILog";
import ITeam from "./ITeam";

type IUser = {
    id: string;
    name: string;
    age: number;
    score: number;
    active: boolean;
    country: string;
    leader: boolean;
    team: ITeam;
    logs: ILog[];
};

export default IUser;