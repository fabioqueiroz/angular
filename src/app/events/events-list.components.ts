import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';


@Component({
   // selector: 'events-list',
   template: `
   <div>
      <h1> Test list </h1>
      <div  class="row">
         <div *ngFor="let item of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(item.name)" [event] = "item"></event-thumbnail>
         </div> 
      </div>
   </div>  
   `,
})

export class EventsListComponent implements OnInit
{
    events: IEvent[]
    
    constructor(private eventService: EventService, private toastrService: ToastrService, private route:ActivatedRoute)
    {
        
    }
    
    ngOnInit()
    {
      //  this.eventService.getEvents().subscribe(events => {this.events = events});
      this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName)
    {
        this.toastrService.success(eventName); 
    }
}