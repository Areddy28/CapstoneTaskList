export interface Task{
    Id:number; 
    Name:string; 
    Description:string; 
    DateDue:Date; 
    Completed:boolean; 
}

export class Convert {
    public static toTask(json: string): Task {
        return JSON.parse(json);
    }
    public static TaskToJson(value: Task): string {
        return JSON.stringify(value);
    }
}