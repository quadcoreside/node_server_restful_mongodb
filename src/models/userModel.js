import mongoose from 'mongoose';
import bycrpt from 'bcrypt'
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bycrpt.compareSync(password, hashPassword);
}