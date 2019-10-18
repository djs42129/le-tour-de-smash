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
    this.dataService.getCharacters().subscribe(characters => {
      this.characters = characters;
      this.dataService.getPlayers().subscribe(players => {
        players.sort((a, b) => {
          const currentCharacterA = characters.find(c => c.key === a.character);
          const currentCharacterB = characters.find(c => c.key === b.character);
          return currentCharacterA.order < currentCharacterB.order ? 1 : -1;
        });
        this.players = players;
      });
    });
  }

  findCurrentCharacterName(player: Player): string {
    const playerCharacter = this.characters.find(char => char.key === player.character);
    return playerCharacter.name;
  }

  calculateProgress(player: Player): number {
    const playerCharacter = this.characters.find(char => char.key === player.character);
    return (playerCharacter.order / this.characters.length) * 100;
  }

}
