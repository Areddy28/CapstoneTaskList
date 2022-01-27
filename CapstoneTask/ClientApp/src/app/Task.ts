export interface Task{
    id:number; 
    name:string; 
    description:string; 
    dateDue:Date; 
    completed:boolean; 
}

export class Convert {
    public static toTask(json: string): Task {
        return JSON.parse(json);
    }
    public static TaskToJson(value: Task): string {
        return JSON.stringify(value);
    }
}