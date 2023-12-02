import { NextFunction, Request, Response, Router } from "express";
import IController from "../interfaces/controller";
import catchAsync from "../utils/catch.error";
import { AuthController } from ".";
import NotificationModel from "../models/notification.model";
import mongoose from "mongoose";
import ClassModel from "../models/class.model";

/*
 NOTIFICATION CONTROLLER
1. GET ALL NOTIFICATIONS
*/

class NotificationController implements IController {
    path: string = "/notifications";
    router: Router = Router();

    constructor() {
        this.router.get('/', AuthController.protect, catchAsync(this.getAllNotifications));
    }

    private getAllNotifications = async (req: Request, res: Response, next: NextFunction) => {
        const classes = await ClassModel.find({ students: new mongoose.Types.ObjectId(req.user?._id) }).lean();
        const classIds = classes.map((item) => item._id);
        
        const notification = await NotificationModel.find({ 
            class: { $in: classIds },
        }).populate('user').sort('-createAt').lean();

        res.status(200).json({
            status: 'success',
            data: notification
        });
    };
}

export default new NotificationController();