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
exports.OrderController = void 0;
//   /app/controllers/orderController.ts
var mongoose = __importStar(require("mongoose"));
var order_1 = require("../models/order");
var OrderMongooseModel = mongoose.model('Order', order_1.OrderSchema);
var OrderController = /** @class */ (function () {
    function OrderController() {
    }
    OrderController.prototype.addNewOrder = function (req, res) {
        var newOrder = new OrderMongooseModel(req.body);
        newOrder.save(function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    OrderController.prototype.getOrders = function (req, res) {
        OrderMongooseModel.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    OrderController.prototype.getOrderById = function (req, res) {
        OrderMongooseModel.findById(req.params.orderId, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    OrderController.prototype.updateOrder = function (req, res) {
        OrderMongooseModel.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    OrderController.prototype.deleteOrder = function (req, res) {
        OrderMongooseModel.findOneAndRemove({ _id: req.params.orderId }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted order!' });
        });
    };
    return OrderController;
}());
exports.OrderController = OrderController;
//# sourceMappingURL=orderController.js.map