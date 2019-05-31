import {Component} from '@angular/core';


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15 px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1000px) {#searchForm {display:none}}
    `]
})

export class NavBarComponent
{

}