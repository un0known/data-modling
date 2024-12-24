import mongoose from 'mongoose'

const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: ture,
        uniqie: true,
        lowercase: true
    },
    email: {
        type: String,
        required: ture,
        uniqie: true,
        lowercase: true
    },
    password: {
        type:String,
        required: true
    },
    

}, {timestamps: ture})


export const User = mongoose.model("User", userSchema)