import { Delete, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { StudentCreateDTO } from './dto/student-create.dto';
import { StudentSearchDTO } from './dto/student-search.dto';
import { StudentUpdateDTO } from './dto/student-update.dto';
import { StudentsService } from './students.service';
import { StudentEnrtyLevelValidationPipe } from './validation/student-enrty-level-validation.pipe';

@Controller('students')
export class StudentsController {

    constructor(private studentService:StudentsService){}

    @Get()
    @UsePipes(ValidationPipe)
    getAllStudents(@Query() studentSearchDTO:StudentSearchDTO){
        if(Object.keys(studentSearchDTO).length){
            return this.studentService.searchStudents(studentSearchDTO);
        }else{
            return this.studentService.getAllStudents();
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new StudentEnrtyLevelValidationPipe())
    createStudent(@Body() studentCreateDTO:StudentCreateDTO){
        return this.studentService.createStudent(studentCreateDTO);
    }

    @Get('/:id')
    getStudentById(@Param('id') id:string){
        return this.studentService.getStudentById(id);
    }

    @Put('/:id/address')
    updateStudent(@Body() studentUpdateDTO:StudentUpdateDTO, @Param('id') id:string){
        studentUpdateDTO.id = id;
        return this.studentService.updateStudent(studentUpdateDTO);
    }

    @Delete('/:id')
    deleteStudent(@Param('id') id:string){
        this.studentService.deleteStudent(id);
    }

}
