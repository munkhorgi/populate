import mongoose, { Schema } from "mongoose";


const LinkSchema = new mongoose.Schema({
    Longlink:{
        type: String,
        required:[true],
    },
    Shortlink:{
        type:String,
    },
    user_id:{
        type: Schema.Types.ObjectId ,
        ref: "User",
        require: true
    }
})


const Link = mongoose.model("Link", LinkSchema );



export default Link