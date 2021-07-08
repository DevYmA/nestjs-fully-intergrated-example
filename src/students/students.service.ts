import { Injectable } from '@nestjs/common';
import { Student, StudentStatus } from './student.model';
import { v1 as uuid } from 'uuid'
import { StudentSearchDTO } from './dto/student-search.dto';
import { StudentCreateDTO } from './dto/student-create.dto';
import { StudentUpdateDTO } from './dto/student-update.dto';

@Injectable()
export class StudentsService {

    private students: Student[] = [];

    getAllStudents(): Student[] {
        return this.students;
    }

    createStudent(studentCreateDTO: StudentCreateDTO) {
        const {
            firstName,
            lastName,
            address,
            entryLevel
        } = studentCreateDTO;
        let student = {
            id: uuid(),
            firstName,
            lastName,
            address,
            entryLevel,
            status: StudentStatus.ACTIVED
        }
        this.students.push(student);
        return student;
    }

    searchStudents(studentSearchDTO: StudentSearchDTO) {
        const { name, status } = studentSearchDTO;
        let students = this.getAllStudents();
        if (status) {
            students = this.students.filter((student) => student.status == status);
        }

        if (name) {
            students = this.students.filter((student) => student.firstName.includes(name) || student.lastName.includes(name))
        }
        return students;
    }

    getStudentById(id: string): Student {
        let students = this.getAllStudents();
        return students.find(student => student.id === id);
    }

    updateStudent(studentUpdateDTO: StudentUpdateDTO): Student {
        const { id, address } = studentUpdateDTO;
        let student = this.getStudentById(id);
        student.address = address;
        return student;
    }

    deleteStudent(id: string) {
        let students = this.getAllStudents();
        students = students.filter(student => student.id !== id);
    }

}
