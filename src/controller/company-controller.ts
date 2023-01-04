import {Request, Response} from "express";
import {Company} from "../model/company";

class CompanyController {
    createCompany = async (req: Request, res: Response) => {
        let company = req.body
        await Company.create(company)
        res.status(201).json({
            message: "create Company success"
        })
    }
    showAllCompany = async (req: Request, res: Response) => {
        let company = await Company.find()
        res.status(201).json(company)
    }
    findById = async (req: Request, res: Response, id) => {
        return await Company.find({_id: id})
    }
}

export default new CompanyController()