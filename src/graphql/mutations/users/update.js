import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql';

import Users from '../../../models/users';
import {UserInputType, UserType} from '../../types/users';

export default{
    type:UserType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        return Users.findByIdAndUpdate(params.id,
          {$set:{...params.data}}
          ).then((user)=>{
              return user;
          }).catch((err)=>{
              throw new Error("Error al realizar update");
          });
    }
}