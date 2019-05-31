import {Component, Input} from '@angular/core';


@Component({
    selector: 'event-thumbnail',
    template:`
    <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngClass]="getStartTime()"  [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
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
    @Input() event: any;  

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
}