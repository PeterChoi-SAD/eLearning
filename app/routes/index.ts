        // /app/routes/index.ts
import {Request, Response} from "express";
import {CourseController} from "../contollers/courseController";
import {UserController} from "../contollers/userController";
import {OrderController} from "../contollers/orderController";

export class Routes { 

    courseController: CourseController = new CourseController();
    userController: UserController = new UserController();
    orderController: OrderController = new OrderController();

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
        app.route('/api/courseDummy')
            .get(this.courseController.generateDummyData);

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

        app.route('/api/userDummy')
        .get(this.userController.generateDummyData);

        // Get all orders
        app.route('/api/orders')
            .get(this.orderController.getOrders);
        
        // Create a new order
        app.route('/api/orders')
            .post(this.orderController.addNewOrder);
        
        // get a specific order
        app.route('/api/orders/:orderId')
            .get(this.orderController.getOrderById);
        
        // update a specific order
        app.route('/api/orders/:orderId')
            .put(this.orderController.updateOrder);
        
        // delete a specific order
        app.route('/api/orders/:orderId')
            .delete(this.orderController.deleteOrder);
    }
}


