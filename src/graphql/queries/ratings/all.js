import {
    GraphQLList
}from 'graphql';

import Ratings from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const queryAllRatings = {
    type:new GraphQLList(RatingType),
    resolve(){
        const ratings = Ratings.find().exec();
        if(!ratings) throw new Error("Error al traer de la BD");
        return ratings;
    }
}

export default queryAllRatings;