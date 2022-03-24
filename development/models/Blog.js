import mongoose from "mongoose";
import Bluebird from "bluebird";
const { Schema } = mongoose;

mongoose.Promise = Bluebird;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;