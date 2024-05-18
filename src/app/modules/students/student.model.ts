import { Schema, model } from "mongoose";
import {
  Guardian,
  Student,
  UserName,
  localGuardian,
} from "./student.interface";

// Schema

const nameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
  },
});
const guardianSchema = new Schema<Guardian>({
  fathersName: {
    type: String,
    required: true,
  },
  fathersOccupation: {
    type: String,
    required: true,
  },
  fathersContactNo: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  mothersOccupation: {
    type: String,
    required: true,
  },
  mothersContactNo: {
    type: String,
    required: true,
  },
});
const localGuardianSchema = new Schema<localGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
  },
  name: nameSchema,
  gender: ["male", "female"],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ["active", "not active"],
});

// Model
export const StudentModel = model<Student>("Student", studentSchema);
