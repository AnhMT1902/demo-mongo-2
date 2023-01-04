import {Request, Response} from "express";
import {Car} from "../model/car";
import {Company} from "../model/company";
import CompanyController from "./company-controller";

class CarController {
    createCar = async (req: Request, res: Response) => {
        let car = req.body
        await Car.create(car)
        res.status(201).json({
            message: "create Car success"
        })
    }
    showAllCar = async (req: Request, res: Response) => {
        let car = await Car.find()
        res.status(201).json(car)
    }
    editCar = async (req: Request, res: Response) => {
        let idCar = req.params.id;
        let newCar = req.body
        await Car.updateOne({_id: idCar}, newCar)
        res.status(201).json({
            message: "edit Car success"
        })
    }
    delCar = async (req: Request, res: Response) => {
        let idCar = req.params.id;
        await Car.deleteOne({_id: idCar})
        res.status(201).json({
            message: "delete Car success"
        })
    }
    showDetailById = async (req: Request, res: Response) => {
        let idCar = req.params.id;
        let car = await Car.findOne({_id: idCar}).populate("company")
        res.status(201).json(car)
    }
    findCarByName = async (req: Request, res: Response) => {
        let findName = req.params.key;
        let car = await Car.find({
            $or: [{
                'name': {'$regex': findName},
            }]
        }).populate("company")
        res.status(201).json(car)
    }
    findCarByBrandName = async (req: Request, res: Response) => {
        let findName = req.params.key;
        let car = await Car.find().populate("company")
        let findCar = await car.filter((item) => {
            return item.company.name === findName
        })
        res.status(201).json(findCar)
    }
    sortByPrice = async (req: Request, res: Response) => {
        let car = await Car.find().sort({price: 1})
        res.status(201).json(car)
    }
    sortByQuantity = async (req: Request, res: Response) => {
        let car = await Car.find().sort({quantity: -1})
        res.status(201).json(car)
    }
    findByWithin = async (req: Request, res: Response) => {
        let findName = req.params.key;
        let car = await Car.find().populate("company")
        let findCar = await car.filter((item) => {
            return item.company.name === findName
        })
        res.status(201).json(findCar)
    }
    findByMaxQuantity = async (req: Request, res: Response) => {
        let car = await Car.aggregate([{
            $group: {
                _id: "$company",
                quantity: {$sum: "$quantity"}
            },

        }]).sort({quantity: -1}).limit(1)
        res.status(201).json(car)
    }
    findByPriceRange = async (req: Request, res: Response) => {
        const fromPrice = req.query.fromPrice
        const toPrice = req.query.toPrice
        let car = await Car.find({$and:[{'price':{$gte:fromPrice,$lte:toPrice}}]})
        res.json(car)
    }
}

export default new CarController();