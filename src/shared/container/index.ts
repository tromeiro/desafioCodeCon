import { container } from "tsyringe";

import IUserRepository from "../../modules/users/repositories/IUserRepository";
import ITeamRepository from "../../modules/teams/repositories/ITeamRepository";
import IProjectRepository from "../../modules/projects/repositories/IProjectRepository";
import ILogRepository from "../../modules/logs/repositories/ILogRepository";

import UserRepository from "../../modules/users/repositories/implementations/UserRepository";
import TeamRepository from "../../modules/teams/repositories/implementations/TeamRepository";
import ProjectRepository from "../../modules/projects/repositories/implementations/ProjectRepository";
import LogRepository from "../../modules/logs/repositories/implementations/LogRepository";

export const USER_REPOSITORY = "UserRepository";
export const TEAM_REPOSITORY = "TeamRepository";
export const PROJECT_REPOSITORY = "ProjectRepository";
export const LOG_REPOSITORY = "LogRepository";

container.registerSingleton<IUserRepository>(USER_REPOSITORY, UserRepository);
container.registerSingleton<ITeamRepository>(TEAM_REPOSITORY, TeamRepository);
container.registerSingleton<IProjectRepository>(PROJECT_REPOSITORY, ProjectRepository);
container.registerSingleton<ILogRepository>(LOG_REPOSITORY, LogRepository);