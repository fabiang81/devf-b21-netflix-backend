import {
    GraphQLNonNull
}from 'graphql';

import Genres from '../../../models/genres';
import {GenreInputType, GenreType} from '../../types/genres';

export default{
    type:GenreType,
    args:{
        data:{
            type:new GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root,params){
        const genre = new Genres(params.data);
        const newGenre = genre.save();
        if(!newGenre) throw new Error("Error al crear un genre");
        return newGenre;
    }
}