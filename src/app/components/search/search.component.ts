import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artista:any[] = [];
  loading:boolean;

  constructor( private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading = true;
    this._spotifyService.getArtistas(termino).subscribe( (data:any) => {
        console.log(data);
        this.artista = data;
        this.loading = false;
    })
  }

}
