import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Http, Response, Headers} from '@angular/http'

import {Subscription} from 'rxjs/Subscription'

import {IVideo} from './video'
import {VideoService} from './video.service'  

import {HistoryService} from './history.service'    

@Component({
    templateUrl: 'app/video-list/video-details.component.html',
    
})

export class VideoDetailComponent implements OnInit, OnDestroy{
    video: IVideo;
    errorMessage: string;
    private sub: Subscription;
    private serviceUrl = "http://localhost:9090/history";
    private userId = 'User1';

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _http: Http,
                private _videoService: VideoService,
                private _historyService: HistoryService
                ){

    }

    ngOnInit(): void{
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getVideo(id);
            }
        )
        
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    getVideo(id: number){
        this._videoService.getVideo(id).subscribe(
            video => this.video = video,
            error => this.errorMessage = <any>error
        );
    }
    onVideoPlay(event:any){
        var history = {
            userId:this.userId,
            id: this.video.id,
            title: this.video.title,
            path: this.video.path,
            cover: this.video.cover

        }
        let body = JSON.stringify(history);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(body);
        this._http.post(this.serviceUrl,body,{headers: headers}).subscribe();
        console.log("history saved");
    }

    onVideoEnd(event:any){
        this._router.navigate(['/videos']);
    }

    
}