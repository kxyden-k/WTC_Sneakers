import {Component, Input, OnInit} from '@angular/core';
import {Sneaker} from "../core/sneaker";
import {Product} from "../core/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  imageUrl: string = "";

  ngOnInit() {
    this.imageUrl = this.product?.smallIImageUrl ?? '';
  }

}
