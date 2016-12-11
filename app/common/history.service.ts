import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IVideo } from '../common/video'

@Injectable()
export class HistoryService{
    
    private historyUrl = "http://localhost:9090/history/";
    constructor(private _http: Http){

    }
    getHistory(userId: string):Observable<IVideo[]>{
        var url = this.historyUrl + userId;

        return this._http.get(url)
            .map((response:Response)=><IVideo[]> response.json())
            .catch(this.handleError);
    }

    saveHistory(history:any): void{
        
        let body = JSON.stringify(history);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(body);
        this._http.post(this.historyUrl,body,{headers: headers}).subscribe();
        console.log("history saved");
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}