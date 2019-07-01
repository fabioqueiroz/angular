import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles:[
        `
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer; }

        `
    ]
})
export class EventDetailsComponent implements OnInit 
{
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes'; 

    constructor(private eventService: EventService, private route:ActivatedRoute) 
    {

    }

    ngOnInit(): void 
    {
       this.event = this.eventService.getSingleEvent(
          + this.route.snapshot.params['id']
       );
    }

    public addSession()
    {
        this.addMode = true;
    }

    public saveNewSession(session:ISession)
    {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateSession(this.event);
        this.addMode = false;
    }

    public cancelAddSession()
    {
        this.addMode = false;
    }
}
