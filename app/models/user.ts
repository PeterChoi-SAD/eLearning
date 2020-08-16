//   /app/models/user.ts
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create a schema
export const UserSchema = new Schema({
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});
