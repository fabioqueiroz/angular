import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';



@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  
  `]
})
export class ProfileComponent implements OnInit 
{
    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

    constructor(private auth: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private _toastr: Toastr)
    {

    }

    public ngOnInit()
    {
      this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[A-Za-z].*')]);
      this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
      this.profileForm = new FormGroup(
      {
          firstName: this.firstName,
          lastName: this.lastName
      }); 
    } 

    public validateFirstName()
    {
      return this.firstName.valid || this.firstName.untouched;
    }

    public validateLastName()
    {
      return this.lastName.valid || this.lastName.untouched;
    }

    public saveProfile(profileForm)
    {
      if(this.profileForm.valid)
      {
        this.auth.updateCurrentUser(profileForm.firstName, profileForm.lastName);
        this._toastr.success('Profile saved');
        this.router.navigate(['events']);  
      }
    }
    public cancel()
    {
      this.router.navigate(['events']);
    }

}
