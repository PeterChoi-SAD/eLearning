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
exports.UserController = void 0;
//   /app/controllers/userController.ts
var mongoose = __importStar(require("mongoose"));
var user_1 = require("../models/user");
var UserMongooseModel = mongoose.model('User', user_1.UserSchema);
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.addNewUser = function (req, res) {
        var newUser = new UserMongooseModel(req.body);
        newUser.save(function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    UserController.prototype.getUsers = function (req, res) {
        UserMongooseModel.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    UserController.prototype.getUserById = function (req, res) {
        UserMongooseModel.findById(req.params.userId, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        UserMongooseModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        UserMongooseModel.findOneAndRemove({ _id: req.params.userId }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    };
    UserController.prototype.generateDummyData = function (req, res) {
        var data = [
            {
                "email": "dongx@xctech.dev",
                "password": "1234",
            },
            {
                "email": "peterc@xctech.dev",
                "password": "1234",
            }
        ];
        UserMongooseModel.collection.insert(data, function (err, docs) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully generated 2 sample documents!' });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map