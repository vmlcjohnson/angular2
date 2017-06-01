import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Zero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>List</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    providers: [HeroService],
})
export class HeroComponent  {
    selectedHero: Zero;

    heroes: Zero[]; 
   
    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    constructor(private heroService: HeroService) {
        
    }
    
    ngOnInit(): void {
      this.getHeroes();
    }

    
    onSelect(hero: Zero): void {
     this.selectedHero = hero;
    }

    
    title = 'Test';
    hero: Zero = {
        id:1,
        name: 'Hinderstorms'
    }

    name = 'of this'; 
}



