//   /app/controllers/userController.ts
import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const UserMongooseModel = mongoose.model('User', UserSchema);

export class UserController { 

    public addNewUser (req: Request, res: Response) {                
        let newUser = new UserMongooseModel(req.body);
    
       newUser.save((err, data) => {
            if (err){
                res.send(err);
            }    
            res.json(data);
        });
    }

    public getUsers (req: Request, res: Response) {           
        UserMongooseModel.find({}, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public getUserById (req: Request, res: Response) {           
        UserMongooseModel.findById(req.params.userId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public updateUser (req: Request, res: Response) {           
        UserMongooseModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, 
            (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public deleteUser (req: Request, res: Response) {           
        UserMongooseModel.findOneAndRemove({ _id: req.params.userId }, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!'});
        });
    }

    public generateDummyData (req: Request, res: Response) {     
        var data = [
            {
            "email":"dongx@xctech.dev",
            "password":"1234",
            },
            {
                "email":"peterc@xctech.dev",
                "password":"1234",
            }                
        ];
          
        UserMongooseModel.collection.insert(data, function (err, docs) { 
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully generated 2 sample documents!'});
        });
    
    }
}
