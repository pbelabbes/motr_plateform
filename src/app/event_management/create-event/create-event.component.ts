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


  eventForm = this.fb.group({
    eventName: ['', Validators.required],
    date:['',Validators.required],
    location : this.fb.group({
      address:['',Validators.required],
      city:['',Validators.required],
      zipCode:['',Validators.required]
    }),
    capacity:[''],
    description:['']
  })

  constructor(private fb: FormBuilder,
              private eS: EventService,
              public afAuth: AngularFireAuth) { }

  onSubmit(){
    console.log(this.eventForm.value);
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    let event:Event =new Event(user.uid,this.eventForm.value);
    console.log(event);
    this.eS.addEvent(event);
  }

  ngOnInit() {
  }

}
