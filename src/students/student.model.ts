export interface Student{
    id:string,
    firstName:string,
    lastName:string,
    address: string,
    entryLevel: StudentEntryLevel,
    status: StudentStatus
}

export enum StudentEntryLevel{
    ADVANCED_LEVEL = 'EN2',
    ORDINARY_LEVEL = 'EN1'
}

export enum StudentStatus{
    ACTIVED = 'ACTIVED',
    DEACTIVATED = 'DEACTIVATED'
}