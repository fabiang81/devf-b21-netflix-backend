import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql';

import Ratings from '../../../models/ratings';
import {RatingInputType, RatingType} from '../../types/ratings';

export default {
    type:RatingType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletedRating = Ratings.findByIdAndRemove(params.id).exec();
        if(!deletedRating) throw new Error("Error al eliminar rating");
        return deletedRating;
    }
}