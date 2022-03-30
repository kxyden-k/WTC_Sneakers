import { Component, OnInit } from '@angular/core';
import {Sneaker} from "../core/sneaker";
import {SneakerService} from "../sneaker.service";
import  {SneakerComponent} from "../sneaker/sneaker.component";

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {
  sneakers: Sneaker[] = [];

  constructor(private sneakerService: SneakerService) { }

  getSneakers(): void {
    this.sneakers = this.sneakerService.getSneakers();
  }

  ngOnInit(): void {
    this.getSneakers()
  }

}
