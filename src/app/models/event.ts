import { Address } from "./address";

export class Event {
    id:string;
    name:string;
    date:Date;
    location:Address;
    description:string;
    capacity:number;

    constructor(formEvent: {
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
        this.name=formEvent.eventName;
        this.date=new Date(formEvent.date);
        this.location=new Address(this.name,formEvent.location);
        console.log(this.location);
        this.description=formEvent.description;
        this.capacity=formEvent.capacity;
    }
}