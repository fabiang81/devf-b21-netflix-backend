import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql'

import User from '../../models/users';

export const UserType = new GraphQLObjectType({
    name:"ListUsers",
    description:"Usuarios de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        },
        is_admin:{
            type:GraphQLBoolean
        },
        create_at:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        },
        client_id:{
            type:GraphQLString
        }
    })
});

export const UserInputType = new GraphQLInputObjectType({
    name:"AddUsers",
    description:"Agrega y modifica usuarios en la BD",
    fields: () => ({
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        password:{
            type:GraphQLString  
        },
        photo:{
            type:GraphQLString
        }
    })
});