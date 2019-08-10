import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../models/event';
import { EventService } from '../../shared/services/event.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventTypes=["salon/forum","conférence"];

  eventForm = this.fb.group({
    eventName: ['', Validators.required],
    eventType:['',Validators.required],
    date:['',Validators.required],
    location : this.fb.group({
      address:['',Validators.required],
      city:['',Validators.required],
      zipCode:['',Validators.required]
    }),
    capacity:[''],
    description:['']
  });

  constructor(private fb: FormBuilder,
              private eS: EventService,
              public afAuth: AngularFireAuth) { }

  onSubmit(){
    const user = JSON.parse(localStorage.getItem('user'));
    let event:Event =new Event(user.uid,this.eventForm.value);
    this.eS.addEvent(event);
  }

  ngOnInit() {
  }

}
