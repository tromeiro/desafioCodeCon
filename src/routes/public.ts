import { Router } from "express";
import multer from "multer";


import createUserController from "../modules/users/useCases/createUser/createUsersController";
import superusersController from "../modules/users/useCases/superUsersController";
import topcountriesController from "../modules/users/useCases/topCountriesController";
import activeuserController from "../modules/users/useCases/activeUsersController";


const appRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

appRouter.post("/users", upload.single('users'), createUserController);
//appRouter.get("/superusers", superusersController);
//appRouter.get("/top-countries", topcountriesController);
//appRouter.get("./team-insights", teamsController)
//appRouter.get("./active-users-per-day", activeuserController);
//appRouter.get("./evaluation", evaluationController);

export default appRouter;