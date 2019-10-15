import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private characters: Character[] = [];
  private players: Player[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCharacters().subscribe(characters => this.characters = characters);
    this.dataService.getPlayers().subscribe(players => {
      players.sort((a, b) => {
        return a.position < b.position ? 1 : -1;
      });
      this.players = players;
    });
  }
}
