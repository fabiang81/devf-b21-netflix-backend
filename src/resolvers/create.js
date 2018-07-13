import jwt from 'jsonwebtoken';
import User from '../models/users';
import bcrypt from 'bcrypt';

const expiresIn = "1d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";

export const createToken = (email, password) => {
    if(!email || !password){
        return false;
    }

    const user = User.findOne({'email':email}).then((user) => {
        const compare = new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, function (err, isMatch) {
                if(isMatch){
                    let payload = {
                        email: user.email,
                        id: user._id
                    }
                    const token = jwt.sign(payload, secret, {expiresIn});
                    resolve(token);
                }else{
                    reject(false);
                }
            });
        });
        return compare;
    }).catch((err) => {
        console.log(err);
        return err;
    });
    return user;
}