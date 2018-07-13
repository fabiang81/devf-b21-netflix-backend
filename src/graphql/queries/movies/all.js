import {
    GraphQLList
}from 'graphql';

import Movies from '../../../models/movies';
import {MovieType} from '../../types/movies';

const queryAllMovies = {
    type:new GraphQLList(MovieType),
    resolve(){
        const movies = Movies.find().exec();
        if(!movies) throw new Error("Error al traer de la BD");
        return movies;
    }
}

export default queryAllMovies;