//   /app/models/order.ts
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create a schema
export const OrderSchema = new Schema({
    CourseId: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Type: {
        type: String,   // 1 - course only 2 - textbook only 3 - both
        required: true
    }    
});
