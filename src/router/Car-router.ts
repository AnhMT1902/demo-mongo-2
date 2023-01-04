import {Router} from "express";
import carController from "../controller/car-controller";

export const carRouter = Router();
carRouter.post('/create', carController.createCar);
carRouter.get('', carController.showAllCar);
carRouter.put('/edit/:id', carController.editCar);
carRouter.delete('/delete/:id', carController.delCar);
carRouter.get('/detail/:id', carController.showDetailById);
carRouter.post('/find/:key', carController.findCarByName);
carRouter.post('/find-by-brand/:key', carController.findCarByBrandName);
carRouter.post('/sort-price', carController.sortByPrice)
carRouter.post('/sort-quantity', carController.sortByQuantity)
carRouter.post('/max-quantity', carController.findByMaxQuantity)
carRouter.post('/find-by-price-range', carController.findByPriceRange)
