import mongoose from 'mongoose'
import { Category } from './catogery.model'

const produstSchema = new mongoose.Schema( {
    discription: {
        type: String,
        requried: true
    },
    name:{
        type: String,
        requried: true
    },
    productImg:{
        type:String
    },
    price: {
        type:Number,
        default: 0
    },
    stock:{
        type:Number,
        default: 0
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})


export const Product = mongoose.model("Product", produstSchema)