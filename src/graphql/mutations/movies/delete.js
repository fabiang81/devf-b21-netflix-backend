import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql';

import Movies from '../../../models/movies';
import {MovieInputType, MovieType} from '../../types/movies';

export default {
    type:MovieType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletedMovie = Movies.findByIdAndRemove(params.id).exec();
        if(!deletedMovie) throw new Error("Error al eliminar película");
        return deletedMovie;
    }
}