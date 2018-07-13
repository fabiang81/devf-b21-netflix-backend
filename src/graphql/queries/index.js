import genres from './genres';
import ratings from './ratings';
import users from './users';
import movies from './movies';

export default{
    ...genres,
    ...ratings,
    ...users,
    ...movies
}