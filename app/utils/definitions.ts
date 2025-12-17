export interface Link{
    label:string,
    link:string
}

export interface Employee{
    name:string,
    phone:string,
    area:string,
    photo_url:string,
    salary:number,
    genre:string
}

export interface Meeting{
    employee:string,
    day:Date,
    hour:number,
    minute:number
}