import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql';

import Genres from '../../../models/genres';
import {GenreInputType, GenreType} from '../../types/genres';

export default{
    type:GenreType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root,params){
        return Genres.findByIdAndUpdate(params.id,
          {$set:{...params.data}}
          ).then((genre)=>{
              return genre;
          }).catch((err)=>{
              throw new Error("Error al realizar update");
          });
    }
}
