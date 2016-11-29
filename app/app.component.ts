import { Component } from '@angular/core';
import {VideoService} from './video-list/video.service';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/videos']">Home</a></li>
                    <li><a [routerLink]="['/history']">History</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `,
    providers: [VideoService]
})
export class AppComponent { 
    pageTitle: string = "Hello";
}
