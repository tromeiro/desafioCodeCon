import { Router } from "express";

import userController from "../modules/usersController";
import superusersController from "../modules/superUsersController";
import topcountriesController from "../modules/topCountriesController";
import teamsController from "../modules/teamInsightsController";
import activeuserController from "../modules/activeUsersController";
import evaluationController from "../modules/evaluationController";

const router = Router();

router.post("/users", userController);
router.get("/superusers", superusersController);
router.get("/top-countries", topcountriesController);
router.get("./team-insights", teamsController)
router.get("./active-users-per-day", activeuserController);
router.get("./evaluation", evaluationController);

export default router;