import { Router } from "express";
import * as AuthController from '../controllers/auth.controller';

const authRoute = Router();

authRoute.post("/signin",AuthController.SignInController);
authRoute.get("/me",AuthController.GetUserController);

export default authRoute;