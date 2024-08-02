const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
//bcrypt crypts passwords etc (security)

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },

    password: {
        type:String,
        required: true
    }
})
//arrow function cannot use this.
userSchema.statics.signup = async function(email, password) {

    //validation using validator package
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Please provide a valid email')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Please create a stronger password')
    }

    //check if email already exists
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

     //higher salt number = more secure but longer for user to sign up, 10 is the default value
     const salt = await bcrypt.genSalt(10)
     //holds the password
     const hash = await bcrypt.hash(password,salt)

     //create the user
    const user = await this.create({
        email, password: hash
    })
    
    return user

}

//login
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error('Email not found')
    }

    //cheeck if hashed pw is the same as the normal pw
    const match = await bcrypt.compare(password, user.password)

    if (!match){
        throw Error("Incorrect Password")
    }
    
    return user
    
}

module.exports = mongoose.model('User', userSchema)