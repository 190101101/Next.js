import mongoose from 'mongoose';

Schema = mongoose.Schema;

const UserSchema = Schema({
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


module.exports = mongoose.model('users', UserSchema);