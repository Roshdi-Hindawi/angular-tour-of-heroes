import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  
  ngOnInit() {
    this.gerHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gerHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}