"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = void 0;
//   /app/models/course.ts
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
// create a schema
exports.CourseSchema = new Schema({
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
//# sourceMappingURL=course.js.map