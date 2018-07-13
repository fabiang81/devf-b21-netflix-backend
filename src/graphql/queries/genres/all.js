import {
    GraphQLList
}from 'graphql';

import Genres from '../../../models/genres';
import {GenreType} from '../../types/genres';

const queryAllGenres = {
    type:new GraphQLList(GenreType),
    resolve(){
        const genres = Genres.find().exec();
        if(!genres) throw new Error("Error al traer de la BD");
        return genres;
    }
}

export default queryAllGenres;