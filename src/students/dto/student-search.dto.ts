import { IsIn } from "class-validator"
import { StudentStatus } from "../student.model"

export class StudentSearchDTO{
    
    @IsIn(Object.values(StudentStatus))
    status:string
    name:string
}