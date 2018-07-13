import {
    GraphQLNonNull
}from 'graphql';

import Ratings from '../../../models/ratings';
import {RatingInputType, RatingType} from '../../types/ratings';

export default{
    type:RatingType,
    args:{
        data:{
            type:new GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root,params){
        const rating = new Ratings(params.data);
        const newRating = rating.save();
        if(!newRating) throw new Error("Error al crear un rating");
        return newRating;
    }
}