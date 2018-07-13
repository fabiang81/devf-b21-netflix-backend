import User from '../models/users';
import jwt from 'jsonwebtoken';

const expiresIn = "1d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";

export const verifyToken = (token) => {
    console.log(token);
    try{
        const [prefix, receivedToken] = token.split(' ');
        let user = null;
        if(!receivedToken){
            throw new Error('No token provided');
        }
        if(prefix != tokenPrefix){
            throw new Error('Invalid header format');
        }
        jwt.verify(receivedToken, secret, (err, payload) => {
            if(err){
                throw new Error("Invalid Token");
            }else{
                user = User.findById(payload.id).exec();
            }
        });
        if(!user) {
            throw new Error("User doesn't exist");
        }
        return user;
    }catch(err){
        throw Error(err);
    }
}