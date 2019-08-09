import { Address } from "./address";

export class Event {
    id:string;
    user_id:string;
    name:string;
    type:string;
    date:Date;
    location:Address;
    description:string;
    capacity:number;

    constructor(userId:string,formEvent: {
                    userId: string,
                    eventName: string,
                    date:string,
                    location : {
                    address:string,
                    city:string,
                    zipCode:string
                    },
                    capacity:number,
                    description:string
      }){
        this.user_id=userId;
        this.name=formEvent.eventName;
        this.date=new Date(formEvent.date);
        this.location=new Address(this.name,formEvent.location);
        console.log(this.location);
        this.description=formEvent.description;
        this.capacity=formEvent.capacity;
    }
}