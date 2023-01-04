import {Router} from "express";
import CompanyController from "../controller/company-controller";
import companyController from "../controller/company-controller";

export const companyRouter = Router();
companyRouter.post('/create', CompanyController.createCompany);
companyRouter.get('', companyController.showAllCompany);
