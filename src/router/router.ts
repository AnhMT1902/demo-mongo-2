import {Router} from "express";
import {carRouter} from "./Car-router";
import {companyRouter} from "./company-router";

export const router = Router();
router.use('/car', carRouter)
router.use('/company', companyRouter)