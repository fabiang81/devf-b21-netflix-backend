'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RatingInputType = exports.RatingType = undefined;

var _graphql = require('graphql');

var _ratings = require('../../models/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RatingType = exports.RatingType = new _graphql.GraphQLObjectType({
    name: "ListRatings",
    description: "Clasificaciones de la BD",
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
            age: {
                type: _graphql.GraphQLInt
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var RatingInputType = exports.RatingInputType = new _graphql.GraphQLInputObjectType({
    name: "AddRatings",
    description: "Agrega y modifica clasificaciones en la BD",
    fields: function fields() {
        return {
            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            age: {
                type: _graphql.GraphQLInt
            }
        };
    }
});