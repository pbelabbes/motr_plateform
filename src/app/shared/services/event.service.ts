import { Injectable } from '@angular/core';
// import { db } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  addEvent(event:Event){
    // db.collection("events").add(event)
    // .then(function(docRef){
    //   console.log("Document written with ID : ",docRef.id);
    // })
    // .catch(function(error){
    //   console.error("Error adding document: ",error);
    // })
  }
}
