import {Component, OnInit } from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IVideo } from '../common/video'
import {HistoryService} from '../common/history.service'   

@Component({
    templateUrl: 'app/history/history.component.html'
})
export class HistoryComponent{
   
    private userId = "user1"
    videos: IVideo[]

     constructor(
                private _http: Http,
                private _historyService: HistoryService
                ){
    }

    ngOnInit(): void{
        this.getUserHistory(this.userId);
    }
    getUserHistory(userId:string){
        this._historyService.getHistory(userId).subscribe(
            video => this.videos = video
        );
    }

}