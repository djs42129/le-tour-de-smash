import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('./assets/characters.json');
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('./assets/players.json');
  }
}
