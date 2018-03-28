import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';


/*
  Generated class for the MusicsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class MusicsProvider {
 
  private Api="https://raw.githubusercontent.com/CsgeeksYoutube/ionic-music-app-data-file/master/New%20Text%20Document.json";
 // private Api:string ="http://kohenoor.tv/data/allnews";
   constructor(private http: HttpClient) {
    console.log('Hello MusicsProvider Provider');
  }
  getMusic(){
    return this.http.get<any[]>(this.Api);
   
  }
  
}
