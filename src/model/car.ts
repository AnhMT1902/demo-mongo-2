import {Schema, model} from 'mongoose';
import {ICompany} from "./company";

interface ICar {
    name?: string;
    price?: number;
    company?: ICompany;
    quantity?: number;
}

let CarSchema = new Schema<ICar>({
    name: String,
    price: Number,
    company: {
        type: Schema.Types.ObjectId,
        ref: 'company'
    },
    quantity: Number
})
let Car = model<ICar>('Car', CarSchema)
export {Car}

