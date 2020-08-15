        // /app/routes/index.ts
import {Request, Response} from "express";
import {CourseController} from "../contollers/courseController";

export class Routes { 

    courseController: CourseController = new CourseController();

    public routes(app: any): void { 
        app.route('/')
            .get((req: Request, res: Response) => {            
                res.status(200).send('Hello World!');
        });    
      
        // Get all courses
        app.route('/api/courses')
            .get(this.courseController.getCourses);
        
        // Create a new course
        app.route('/api/courses')
            .post(this.courseController.addNewCourse);
        
        // get a specific course
        app.route('/api/courses/:courseId')
            .get(this.courseController.getCourseById);
        
        // update a specific course
        app.route('/api/courses/:courseId')
            .put(this.courseController.updateCourse);
        
        // delete a specific course
        app.route('/api/courses/:courseId')
            .delete(this.courseController.deleteCourse);
        
        // generate dummy data
        app.route('/api/dummy')
            .get(this.courseController.generateDummyData);
    }
}


