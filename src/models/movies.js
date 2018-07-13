import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    "name":{
        type:String,
        required:true
    },
    "plot":{
        type:String,
        required:true
    },
    "genre":{
        type:Schema.Types.ObjectId,
        ref:'Genres'
    },
    "url":{
        type:String,
        required:true
    },
    "director":{
        type:String,
        required:true
    },
    "year":{
        type:String
    },
    "rate":{
        type:[Number],
    },
    "rating":{
        type:Schema.Types.ObjectId,
        ref:'Ratings'
    },
    "is_active":{
        type:Boolean,
        default:true
    },
    "uploaded_at":{
        type:Date,
        default:new Date()
    }
}, {collection:"Movies", timestamps:true});

export default mongoose.model('Movies', MovieSchema);