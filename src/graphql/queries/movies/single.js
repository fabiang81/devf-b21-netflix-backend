import {
    GraphQLID,
    GraphQLNonNull
}from 'graphql';

import Movies from '../../../models/movies';
import {MovieType} from '../../types/movies';

const querySingleMovie = {
    type:MovieType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const movie = Movies.findById(params.id).exec();
        return movie;
    }
}

export default querySingleMovie;