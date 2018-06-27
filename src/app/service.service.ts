import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class ServiceService {

  private apiUrl = 'https://api.meetup.com';

  private apiKey = '5770848146a1b6ac3e5c763b726d2c';

  constructor(private _http: Http) { }

  public getGroupCategories() {

    return this._http.get(this.apiUrl + '/2/categories?key=' +
      this.apiKey + '&group_urlname=johannesburg&sign=true')
      .catch(this._errorHandler);
  }

  public getGroupsByCategory(_id:string) {

    return this._http.get(this.apiUrl + '/find/groups?key=' +
      this.apiKey + '&group_urlname=johannesburg&category='+_id+'&sign=true')
      .catch(this._errorHandler);
  }

  //error handler
  private _errorHandler(error: Response) {
    console.error('Error occurred!.' + error);

    return Observable.throw(error);
  }
}
