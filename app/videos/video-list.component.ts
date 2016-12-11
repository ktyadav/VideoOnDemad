import { Component } from '@angular/core';
import { IVideo } from '../common/video';
import { VideoService } from '../common/video.service';

@Component({
    templateUrl: 'app/videos/video-list.component.html',
    selector: "video-list"

})

export class VideoListComponent {

    errorMessage: string;
    videos: IVideo[];
    constructor(private _videoService: VideoService) {

    }
    ngOnInit() {
        var test = this._videoService.getVideos();
        console.log(test);
        this._videoService.getVideos()
            .subscribe(videos => this.videos = videos,
            error => this.errorMessage = error);
    }


}