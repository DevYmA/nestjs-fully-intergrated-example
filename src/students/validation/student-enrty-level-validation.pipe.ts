import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { StudentEntryLevel } from '../student.model';

@Injectable()
export class StudentEnrtyLevelValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.entryLevel in StudentEntryLevel)){
      throw new BadRequestException(`${value.entryLevel} is not valid entry level`);
    }
    return value;
  }
}
