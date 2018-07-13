import {
    GraphQLNonNull
}from 'graphql';

import Movies from '../../../models/movies';
import {MovieInputType, MovieType} from '../../types/movies';

export default{
    type:MovieType,
    args:{
        data:{
            type:new GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root,params){
        console.log(params.data);
        const movie = new Movies(params.data);
        const newMovie = movie.save();
        if(!newMovie) throw new Error("Error al crear una pelicula");
        return newMovie;
    }
}