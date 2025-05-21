import IProject from "./IProject";

type ITeam = {
    name: string;
    leader: boolean;
    projects: IProject[];
};

export default ITeam;