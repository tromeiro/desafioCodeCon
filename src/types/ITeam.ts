import IProject from "./IProject";
import IUser from "./IUser";

type ITeam = {
    id: string;
    name: string;
    users: IUser[];
    projects: IProject[];
};

export default ITeam;