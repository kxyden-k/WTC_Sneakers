import {Component, Input, OnInit} from '@angular/core';
import {Sneaker} from "../core/sneaker";
import {SneakerService} from "../sneaker.service";

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {
  @Input() sneaker: Sneaker | undefined;
  imageUrl: string = "";

  ngOnInit() {
    this.imageUrl = this.sneaker?.media.smallImageUrl ?? '';
  }

}
