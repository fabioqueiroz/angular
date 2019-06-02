import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';

@Component({
   selector: 'events-list',
   // templateUrl: './events-list.component.html'
   template: `
   <div>
      <h1> Test list </h1>
      <div class="well"><div>title</div></div>
      <div  class="row">
         <div *ngFor="let item of events" class="col-md-5">
          <event-thumbnail  [event] = "item"></event-thumbnail>
         </div> 
      </div>
   </div>  
   `,
})

export class EventsListComponent implements OnInit
{
    events: any[]
    
    constructor(private eventService: EventService)
    {
        
    }
    
    ngOnInit()
    {
      this.events = this.eventService.getEvents();
    }
}