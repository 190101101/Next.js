import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    confirmpassword:{
        type: String,
        required:true,
    },
    phone:{
        type: Number,
        required:true,
    },
    address:{
        type: String,
        required:true,
    },
    job:{
        type: String,
    },
    bio:{
        type: String,
    },
    emailVerified:{
        type: String,
        default: null,
    }
}, {timestamps:true});

export default mongoose.models.User || mongoose.model("User", UserSchema);