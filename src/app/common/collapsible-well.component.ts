import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
        <ng-content select="[well-title]"></ng-content> 
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>

    `
})

export class CollapsibleWellComponent
{
    // <h4 class="well-title">{{title}}</h4> (v2)
    // @Input() title: string;
    visible: boolean = true;

    public toggleContent()
    {
        this.visible = !this.visible;
    }
}
