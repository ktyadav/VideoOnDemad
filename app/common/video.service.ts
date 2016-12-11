import {Injectable} from '@angular/core';
import {IVideo} from './Video';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class VideoService{
    private _videoUrl = 'api/videos/videos.json';

    constructor(private _http: Http){

    }
    
    getVideos(): Observable<IVideo[]>{

        return this._http.get(this._videoUrl)
            .map((response:Response)=><IVideo[]> response.json())
            .catch(this.handleError);
    }

    getVideo(id:number): Observable<IVideo>{
        return this.getVideos()
            .map((videos: IVideo[]) =>videos.find(v => v.videoId == id));
    }
    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}