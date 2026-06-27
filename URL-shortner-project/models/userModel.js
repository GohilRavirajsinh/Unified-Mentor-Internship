const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Users Schema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: paasword,
        required: true
    }
});

// Hash password before saving the user
// userSchema.pre('save', async function(next){
//     if(!this.isModified('password')) return next();
//     try {
//         const salt = 
//     } catch (err) {
        
//     }
// })