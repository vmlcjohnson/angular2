import { Injectable } from '@angular/core';

import { Zero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Zero[] {
    return HEROES;
  }
}
