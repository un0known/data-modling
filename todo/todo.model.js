import mongoose from 'mongoose'
import { SubTodo } from './sub_todo.model'

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,

    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    SubTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // Array of sub-todos
}, {timestamps: ture})


export const Todo  = mongoose.model("Todo", todoSchema)