'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenreInputType = exports.GenreType = undefined;

var _graphql = require('graphql');

var _genres = require('../../models/genres');

var _genres2 = _interopRequireDefault(_genres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenreType = exports.GenreType = new _graphql.GraphQLObjectType({
    name: "ListGenres",
    description: "Géneros de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var GenreInputType = exports.GenreInputType = new _graphql.GraphQLInputObjectType({
    name: "AddGenres",
    description: "Agrega y modifica géneros en la BD",
    fields: function fields() {
        return {
            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            }
        };
    }
});