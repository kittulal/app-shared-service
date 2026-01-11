// Injectable decorator allows this class to participate in Angular's
// Dependency Injection (DI) system
import { Injectable } from '@angular/core';

// Subject is an RxJS type that acts as BOTH:
// 1) an Observable (to subscribe to)
// 2) an Observer (to emit values)
import { Subject } from 'rxjs';

@Injectable({
  // providedIn: 'root' makes this service a SINGLETON
  // One instance is created and shared across the entire application
  providedIn: 'root',
})
export class Intercomm {

  // PRIVATE Subject used internally to emit messages
  // We keep it private so no component can emit values directly
  // This ensures better encapsulation and control
  private _interCommunicationService = new Subject<string>();

  // Public Observable exposed to components
  // Components can ONLY subscribe, not emit
  // This follows best practice: "emit privately, observe publicly"
  interCommunication$ = this._interCommunicationService.asObservable();

  // Method used by any component to send a message
  // This pushes the message to all subscribers
  sendMessage(message: string) {
    // next() emits the value to all active subscribers
    this._interCommunicationService.next(message);
  }
}
