"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
//   /app/models/order.ts
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
// create a schema
exports.OrderSchema = new Schema({
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
        type: String,
        required: true
    }
});
//# sourceMappingURL=order.js.map