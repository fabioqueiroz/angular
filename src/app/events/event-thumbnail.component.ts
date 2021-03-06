import {Component, Input} from '@angular/core';
import { IEvent } from './shared/index';



@Component({
    selector: 'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase}}</h2>
    <div>Date: {{event?.date | date: 'dd/MM/yyyy'}}</div>
    <div [ngClass]="getStartTime()"  [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div [ngStyle]="getStyle()">Price: {{event?.price | currency: 'EUR'}}</div>
    <div>
       <span>Location: {{event?.location.address}}</span>
       <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
        Online Url: {{event?.onlineUrl}},

    </div>
    </div>
    `,
    styles:[`
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left:10px;}
        .well h2 {color: #D8C4C4}
        .early-color {color: #4DD22C; !important}
        .late-color {color: #E1BA1D; !important;}
        .bold {font-weight: bold;}

        `
    ]
})

export class EventThumbnailComponent
{
    @Input() event: IEvent  

    getStartTime()
    {
        if(this.event && this.event.time === '8:00 am')
        {
            return ['early-color', 'bold'];
        }

        else if (this.event && this.event.time === '10:00 am')
        {
            return 'late-color bold';
        }
        return[];
    }

    getStyle()
    {
        if(this.event && this.event.price > 800)
        {
            return {color: '#9C7EE1', 'font-style': 'italic'};
        }

        return {};
    }
}