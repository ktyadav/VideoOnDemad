import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'

import {Subscription} from 'rxjs/Subscription'

import {IVideo} from './video'
import {VideoService} from './video.service'      

@Component({
    template:`<div *ngIf='video'>
     <video id="backgroundvid"  onended='goBack($event)' controls>
        <source src="{{video.path}}" type="video/mp4">
        <p>Fallback content to cover incompatibility issues</p>
    </video>
</div>`,
})

export class VideoDetailComponent implements OnInit, OnDestroy{
    video: IVideo;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _videoService: VideoService){

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

    goBack(event: Event): void {
        console.log('called');
        this._router.navigate(['/videos']);
    }
}