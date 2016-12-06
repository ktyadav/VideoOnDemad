import {Injectable} from '@angular/core';
import {IVideo} from './Video';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HistoryService{
    private _historyUrl = 'http://localhost:9090/';

    constructor(private _http: Http){

    }

    save(history:any){
        this._http.post(this._historyUrl+'save',history)
    }
    get(id:number):any{
        var result = this._http.get(this._historyUrl+'get/'+id);
        console.log(result);
    }
}