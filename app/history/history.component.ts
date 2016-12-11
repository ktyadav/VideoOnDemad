import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Http, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IVideo } from '../video-list/video'
import {HistoryService} from '../video-list/history.service'   

@Component({
    templateUrl: 'app/history/history.component.html'
})
export class HistoryComponent{
    private serviceUrl = "http://localhost:9090/history/";
    private userId = "User1";
    private history:any;
    videos: IVideo[];
     constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _http: Http,
                private _historyService: HistoryService
                ){

    }

    ngOnInit(): void{
        
        var url = this.serviceUrl+this.userId;
        console.log(url);
       this._http.get(url)
                    .map((res:Response)=>res.json())
                    .subscribe((res)=>{
                                this.videos=res;
                                console.log(this.videos);
                    })
       
    console.log(this.videos);
   

    }
    logError(err:any) {
        console.error('There was an error: ' + err);
    }

}