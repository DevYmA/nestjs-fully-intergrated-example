import { IsEmpty, IsNotEmpty } from "class-validator";
import { StudentEntryLevel, StudentStatus } from "../student.model";

export class StudentCreateDTO {
    
    @IsNotEmpty()
    firstName: string
    
    @IsNotEmpty()
    lastName: string
    address: string
    entryLevel: StudentEntryLevel
    status: StudentStatus
}