import {
    GraphQLID,
    GraphQLNonNull
}from 'graphql';

import Genres from '../../../models/genres';
import {GenreType} from '../../types/genres';

const querySingleGenre = {
    type:GenreType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const genre = Genres.findById(params.id).exec();
        return genre;
    }
}

export default querySingleGenre;