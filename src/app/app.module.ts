import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent

} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,   
    CreateSessionComponent,
    SessionListComponent
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    AuthService,
    EventsListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkCancelState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkCancelState(component:CreateEventComponent)
{
  if (component.isCancelled) 
  {
    return window.confirm("Cancel without saving?")
  }

  return true;
}
