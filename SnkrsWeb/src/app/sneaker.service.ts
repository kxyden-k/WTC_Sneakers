import { Injectable } from '@angular/core';
import {Sneaker} from "./core/sneaker";
import {Sneakers} from "./mock-sneakers";
import {Observable, of} from "rxjs";
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class SneakerService {

  constructor() { }

  getSneakers(): Sneaker[] {
    return Sneakers;
  }

  getSneaker(id: string): Observable<Sneaker | undefined> {
    const sneaker = Sneakers.find(sneaker => sneaker.id === id);
    return of(sneaker);
  }
}
