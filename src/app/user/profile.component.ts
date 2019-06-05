import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit 
{
    profileForm: FormGroup

    constructor(private auth: AuthService, private router: Router)
    {

    }

    public ngOnInit()
    {
      let firstName = new FormControl(this.auth.currentUser.firstName);
      let lastName = new FormControl(this.auth.currentUser.lastName);
      this.profileForm = new FormGroup(
      {
          firstName: firstName,
          lastName: lastName
      }); 
    } 

    public saveProfile(profileForm)
    {
      this.auth.updateCurrentUser(profileForm.firstName, profileForm.lastName);
      this.router.navigate(['events']);  
    }
    public cancel()
    {
      this.router.navigate(['events']);
    }

}
