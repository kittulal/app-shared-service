import { Component, inject, OnInit } from '@angular/core';
import {Intercomm} from '../intercomm';
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnInit{
 
  intercomm = inject(Intercomm);
  teacheMessage = '';
  teacherAppreciate = '';
  ngOnInit(): void {
    this.intercomm.interCommunication$.subscribe((message => {
      console.log('Child received message:', message);
      
        if(message === 'Hello Student!'){
          this.teacheMessage = "Received from Teacher: "+message;
          alert('Hi Madam: Welcome to the Angular course!');
        }
        if(message === 'You are doing great!'){
          this.teacherAppreciate = "Received from Teacher: "+message;
          alert('Thank you Madam: Your teaching is excellent!');
        }
    }));
 }
}
