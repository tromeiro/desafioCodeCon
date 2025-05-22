import multer from "multer";
import { Router } from "express";

import createUserController from "../modules/users/useCases/createUser/createUsersController";
import superUsersController from "../modules/users/useCases/getUser/getUsersController";
import topCountriesController from "../modules/teams/useCases/getCoutries/getCountriesController";
import teamController from "../modules/teams/useCases/getTeams/getTeamsController";
import activeUserController from "../modules/logs/useCase/activeUsersController";

const appRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

appRouter.post("/users", upload.single('users'), createUserController);
appRouter.get("/superusers", superUsersController);
appRouter.get("/top-countries", topCountriesController);
appRouter.get("/team-insights", teamController)
appRouter.get("/active-users-per-day", activeUserController);

export default appRouter;