import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../models/event';

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

  constructor(private fb: FormBuilder) { }

  onSubmit(){
    console.log(this.eventForm.value);
    let event:Event =new Event(this.eventForm.value);
    console.log(event);
  }

  ngOnInit() {
  }

}
