"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
//   /app/controllers/courseController.ts
var mongoose = __importStar(require("mongoose"));
var course_1 = require("../models/course");
var CourseMongooseModel = mongoose.model('Course', course_1.CourseSchema);
var CourseController = /** @class */ (function () {
    function CourseController() {
    }
    CourseController.prototype.addNewCourse = function (req, res) {
        var newCourse = new CourseMongooseModel(req.body);
        newCourse.save(function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    CourseController.prototype.getCourses = function (req, res) {
        CourseMongooseModel.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    CourseController.prototype.getCourseById = function (req, res) {
        CourseMongooseModel.findById(req.params.courseId, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    CourseController.prototype.updateCourse = function (req, res) {
        CourseMongooseModel.findOneAndUpdate({ _id: req.params.courseId }, req.body, { new: true }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    CourseController.prototype.deleteCourse = function (req, res) {
        CourseMongooseModel.findOneAndRemove({ _id: req.params.courseId }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted course!' });
        });
    };
    CourseController.prototype.generateDummyData = function (req, res) {
        var data = [
            {
                "Title": "English 011",
                "Description": "Introduction to English",
                "Textbook": "English 011",
                "Price": 25.03
            },
            {
                "Title": "English 012",
                "Description": "Intermediate English",
                "Textbook": "English 012",
                "Price": 35.03
            }
        ];
        CourseMongooseModel.collection.insert(data, function (err, docs) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully generated 2 sample documents!' });
        });
    };
    return CourseController;
}());
exports.CourseController = CourseController;
//# sourceMappingURL=courseController.js.map