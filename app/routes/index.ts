        // /app/routes/index.ts
import {Request, Response} from "express";
import {CourseController} from "../contollers/courseController";
import {UserController} from "../contollers/userController";

export class Routes { 

    courseController: CourseController = new CourseController();
    userController: UserController = new UserController();

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
        
        // Get all users
        app.route('/api/users')
            .get(this.userController.getUsers);
        
        // Create a new user
        app.route('/api/users')
            .post(this.userController.addNewUser);
        
        // get a specific user
        app.route('/api/users/:userId')
            .get(this.userController.getUserById);
        
        // update a specific user
        app.route('/api/users/:userId')
            .put(this.userController.updateUser);
        
        // delete a specific user
        app.route('/api/users/:userId')
            .delete(this.userController.deleteUser);
        
        // generate dummy data
        app.route('/api/dummy')
            .get(this.userController.generateDummyData);
    }
}


