import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql'

import Genres from '../../models/genres';

export const GenreType = new GraphQLObjectType({
    name:"ListGenres",
    description:"Géneros de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        }
    })
});

export const GenreInputType = new GraphQLInputObjectType({
    name:"AddGenres",
    description:"Agrega y modifica géneros en la BD",
    fields: () => ({
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        }
    })
});