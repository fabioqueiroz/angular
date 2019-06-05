import { Injectable } from '@angular/core';
import { IUser } from './user.model';



@Injectable()

export class AuthService
{
    currentUser:IUser
    public loginUser(userName: string, password: string)
    {
        this.currentUser = 
        {
            id: 1,
            userName: "test",
            firstName: "Test",
            lastName: "User"
        }
    }
    public isAuthenticated()
    {
        return !!this.currentUser; 
    }

    public updateCurrentUser(firstName: string, lastName: string)
    {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
