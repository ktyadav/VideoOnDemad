import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'

import {Subscription} from 'rxjs/Subscription'

import {IVideo} from './video'
import {VideoService} from './video.service'  

import {HistoryService} from './history.service'    

@Component({
    templateUrl: 'app/video-list/video-details.component.html'
})

export class VideoDetailComponent implements OnInit, OnDestroy{
    video: IVideo;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
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
    public onVideoPlay(){
        console.log('hi');
    var history ={
            "userid":1,
            "id": this.video.id,
            "title": this.video.title,
            "path": this.video.path,
            "cover": this.video.cover
        }
        this._historyService.save(history);
    }

    
}