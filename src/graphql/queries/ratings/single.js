import {
    GraphQLID,
    GraphQLNonNull
}from 'graphql';

import Ratings from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const querySingleRating = {
    type:RatingType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const rating = Ratings.findById(params.id).exec();
        return rating;
    }
}

export default querySingleRating;