import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Event } from '../../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(  public afs: AngularFirestore) { }

  addEvent(event:Event){
    console.log(event);
    this.afs.collection("events").add(JSON.parse(JSON.stringify(event)))
    .then(function(docRef){
      console.log("Document written with ID : ",docRef.id);
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    })
  }
}
