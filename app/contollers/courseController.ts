//   /app/controllers/courseController.ts
import * as mongoose from 'mongoose';
import { CourseSchema } from '../models/course';
import { Request, Response } from 'express';

const CourseMongooseModel = mongoose.model('Course', CourseSchema);

export class CourseController { 

    public addNewCourse (req: Request, res: Response) {                
        let newCourse = new CourseMongooseModel(req.body);
    
       newCourse.save((err, data) => {
            if (err){
                res.send(err);
            }    
            res.json(data);
        });
    }

    public getCourses (req: Request, res: Response) {           
        CourseMongooseModel.find({}, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public getCourseById (req: Request, res: Response) {           
        CourseMongooseModel.findById(req.params.courseId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public updateCourse (req: Request, res: Response) {           
        CourseMongooseModel.findOneAndUpdate({ _id: req.params.courseId }, req.body, { new: true }, 
            (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public deleteCourse (req: Request, res: Response) {           
        CourseMongooseModel.findOneAndRemove({ _id: req.params.courseId }, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted course!'});
        });
    }

    public generateDummyData (req: Request, res: Response) {     
        var data = [
            {
            "Title":"English 011",
            "Description":"Introduction to English",
            "Textbook":"English 011",
            "Price":25.03
            },
            {
                "Title":"English 012",
                "Description":"Intermediate English",
                "Textbook":"English 012",
                "Price":35.03
            }                
        ];
          
        CourseMongooseModel.collection.insert(data, function (err, docs) { 
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully generated 2 sample documents!'});
        });
    
    }
}
