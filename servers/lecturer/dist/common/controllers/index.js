"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentListController = exports.GradeController = exports.ClassController = exports.UserProfile = exports.AuthController = void 0;
// export { default as UserController } from "./user.example.controller";
var auth_controller_1 = require("./auth.controller");
Object.defineProperty(exports, "AuthController", { enumerable: true, get: function () { return __importDefault(auth_controller_1).default; } });
var user_controller_1 = require("./user.controller");
Object.defineProperty(exports, "UserProfile", { enumerable: true, get: function () { return __importDefault(user_controller_1).default; } });
var class_controller_1 = require("./class.controller");
Object.defineProperty(exports, "ClassController", { enumerable: true, get: function () { return __importDefault(class_controller_1).default; } });
var grade_controller_1 = require("./grade.controller");
Object.defineProperty(exports, "GradeController", { enumerable: true, get: function () { return __importDefault(grade_controller_1).default; } });
var student_list_controller_1 = require("./student-list.controller");
Object.defineProperty(exports, "StudentListController", { enumerable: true, get: function () { return __importDefault(student_list_controller_1).default; } });
