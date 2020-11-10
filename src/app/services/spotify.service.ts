import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:any = 'BQC5O8mj7rMysUDvRTHx6v2Ca1j8sFS-_omYSTzIg-HIns1n5oJu49-DSH7moBH0lQsm5AE04aB6DYugDhM' ;

  constructor( private _http: HttpClient) { }

  //centralizar toda la inforacion de los get
  getQuery( query:string){
      const url = `https://api.spotify.com/v1/${ query }`; 
      const headers =  new HttpHeaders({
        'Authorization': 'Bearer '+this.token
      });  

      return this._http.get( url, {headers});
  }

  getNewReleases(){
    //primera forma de retornar resultados con funcion de flechas
    return this.getQuery('browse/new-releases')
      .pipe( map( data=> {
        return data['albums'].items;
      } ));
  }

  getArtistas(termino){
    //forma mas optima de retornar resultados con funcion de flecha
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data=> data['artists'].items ));
  }

  getArtista(id:string){
    //forma mas optima de retornar resultados con funcion de flecha
    return this.getQuery(`artists/${ id }`); 
      //.pipe( map( data=> data['artists'].items ));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map( data=> data['tracks'] ));
  }

  


}
