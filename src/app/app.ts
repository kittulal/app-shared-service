import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Intercomm } from './intercomm';
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {  
  protected readonly title = signal('app-shared-service');
  intercomm = inject(Intercomm);


  greetStudent() {
    this.intercomm.sendMessage('Hello Student!');
  }

  appreciateStudent() {
    this.intercomm.sendMessage('You are doing great!');
  } 
}