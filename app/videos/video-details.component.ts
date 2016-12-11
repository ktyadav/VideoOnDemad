import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Http, Response, Headers} from '@angular/http'

import {Subscription} from 'rxjs/Subscription'

import {IVideo} from '../common/video'
import {VideoService} from '../common/video.service'  

import {HistoryService} from '../common/history.service'    

@Component({
    templateUrl: 'app/videos/video-details.component.html',
    
})

export class VideoDetailComponent implements OnInit, OnDestroy{
    video: IVideo;
    errorMessage: string;
    private sub: Subscription;
    private serviceUrl = "http://localhost:9090/history";
    private userId = 'user1';

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
            videoId: this.video.videoId,
            title: this.video.title,
            path: this.video.path,
            cover: this.video.cover

        }
        this._historyService.saveHistory(history);
    }

    onVideoEnd(event:any){
        this._router.navigate(['/videos']);
    }

    
}