import {Schema, model} from 'mongoose';

export interface ICompany {
    name?: string;
    description?: string;
}

let CompanySchema = new Schema<ICompany>({
    name: String,
    description: String
});
let Company = model<ICompany>('company', CompanySchema);
export {Company};