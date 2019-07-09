import { Injectable } from '@angular/core';
import {Hero} from './hero/hero';
import {HEROES} from './mock-heroes';
import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('HeroService: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }
}


