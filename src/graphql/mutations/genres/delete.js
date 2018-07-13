import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql';

import Genres from '../../../models/genres';
import {GenreInputType, GenreType} from '../../types/genres';

export default {
    type:GenreType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletedGenre = Genres.findByIdAndRemove(params.id).exec();
        if(!deletedGenre) throw new Error("Error al eliminar genre");
        return deletedGenre;
    }
}