import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[New form will go here]</h3>
            <button type="submit" class="btn btn-primary" >Save</button>
            <button type="button" class="btn btn-secondary cancel-btn" (click)="clickCancel()">Cancel</button>
        </div>

    `
})
export class CreateEventComponent {

    isCancelled = true
    
    constructor(private router:Router)
    {

    }
    
    clickCancel()
    {
        this.router.navigate(['/events']);
    }
}
