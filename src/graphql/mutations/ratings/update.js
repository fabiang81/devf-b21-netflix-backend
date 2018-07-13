import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql';

import Ratings from '../../../models/ratings';
import {RatingInputType, RatingType} from '../../types/ratings';

export default{
    type:RatingType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root,params){
        return Ratings.findByIdAndUpdate(params.id,
          {$set:{...params.data}}
          ).then((rating)=>{
              return rating;
          }).catch((err)=>{
              throw new Error("Error al realizar update");
          });
    }
}