import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

//schema definition
const UserSchema = new Schema({
    "name":{
        type:String,
        required:true
    },
    "lastname":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true,
        unique:true
    },
    "password":{
        type:String,
        required:true
    },
    "photo":{
        type:String
    },
    "is_admin":{
        type:Boolean,
        default:false
    },
    "create_at":{
        type:Date,
        default:new Date()
    },
    "is_active":{
        type:Boolean,
        default:true
    },
    "client_id":{
        /* Para el procesador de pagos */
        type:String
    }
},{collection:"Users", timestamps:true});

//
UserSchema.pre('save', function(next) {
    let user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);
        bcrypt.hash(user.password,salt, function(err, hash) {
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

//método para validación de password
UserSchema.methods.comparePassword = function(candidatePassword, callBack) {
    bcrypt.compare(candidate.password, this.password, function(err, isMatch) {
        callBack(null, isMatch)
    });
}

//plugin para validación de campos únicos de mongoose
UserSchema.plugin(uniqueValidator);

export default mongoose.model('Users', UserSchema);