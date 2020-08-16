//   /app/controllers/orderController.ts
import * as mongoose from 'mongoose';
import { OrderSchema } from '../models/order';
import { Request, Response } from 'express';

const OrderMongooseModel = mongoose.model('Order', OrderSchema);

export class OrderController { 

    public addNewOrder (req: Request, res: Response) {                
        let newOrder = new OrderMongooseModel(req.body);
    
       newOrder.save((err, data) => {
            if (err){
                res.send(err);
            }    
            res.json(data);
        });
    }

    public getOrders (req: Request, res: Response) {           
        OrderMongooseModel.find({}, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public getOrderById (req: Request, res: Response) {           
        OrderMongooseModel.findById(req.params.orderId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public updateOrder (req: Request, res: Response) {           
        OrderMongooseModel.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true }, 
            (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public deleteOrder (req: Request, res: Response) {           
        OrderMongooseModel.findOneAndRemove({ _id: req.params.orderId }, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted order!'});
        });
    }
}
