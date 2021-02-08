import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { from } from 'rxjs';

@Injectable()

export class PeticionesService {

    public url: string;

    constructor(public _http: HttpClient){
        this.url = 'https://reqres.in/'
    }

    getUser(id: any): Observable<any> {
        return this._http.get(this.url+'api/users/'+id);
    }

    adduser(user: any): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }
} 