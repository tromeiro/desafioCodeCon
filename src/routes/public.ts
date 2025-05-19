import { Router } from "express";
import multer from "multer";


import createUserController from "../modules/users/useCases/createUser/createUsersController";
import superusersController from "../modules/superUsersController";
import topcountriesController from "../modules/topCountriesController";
import teamsController from "../modules/teams/useCases/createTeam/createTeamController";
import activeuserController from "../modules/activeUsersController";
import evaluationController from "../modules/evaluationController";

const appRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

appRouter.post("/users", upload.single('file'), createUserController);
//appRouter.get("/superusers", superusersController);
//appRouter.get("/top-countries", topcountriesController);
//appRouter.get("./team-insights", teamsController)
//appRouter.get("./active-users-per-day", activeuserController);
//appRouter.get("./evaluation", evaluationController);

export default appRouter;