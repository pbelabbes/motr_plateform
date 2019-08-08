export class Address {
    id:number;
    name:string;
    street:string;
    street_nb:number;
    cp:string;
    city:string;
    compl:string;
    coord:string;

    constructor(name:string, formEventLocation: {
        address:string,
        city:string,
        zipCode:string
        }){
this.name=name+"_address";
this.street = formEventLocation.address;
this.city=formEventLocation.city;
this.cp=formEventLocation.zipCode;
console.log(this.name);

}
}