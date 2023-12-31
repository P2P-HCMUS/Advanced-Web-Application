"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeListDTO = void 0;
const class_validator_1 = require("class-validator");
class GradeListDTO {
}
exports.GradeListDTO = GradeListDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: "Class ID must be a string" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Class ID not founded!" }),
    __metadata("design:type", String)
], GradeListDTO.prototype, "classID", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "Student list must have a studentID, fullname and email" }),
    __metadata("design:type", Array)
], GradeListDTO.prototype, "gradeList", void 0);
exports.default = GradeListDTO;
