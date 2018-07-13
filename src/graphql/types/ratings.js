import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql'

import Rating from '../../models/ratings';

export const RatingType = new GraphQLObjectType({
    name:"ListRatings",
    description:"Clasificaciones de la BD",
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
        age:{
            type:GraphQLInt
        },
        is_active:{
            type:GraphQLBoolean
        }
    })
});

export const RatingInputType = new GraphQLInputObjectType({
    name:"AddRatings",
    description:"Agrega y modifica clasificaciones en la BD",
    fields: () => ({
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        }
    })
});