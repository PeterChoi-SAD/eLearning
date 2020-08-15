//   /app/models/course.ts
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create a schema
export const CourseSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Textbook: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    PublicYoutubeId: {
        type: String,
        required: false
    },
    UnlistedYoutubeId: {
        type: String,
        required: false
    }    
});
