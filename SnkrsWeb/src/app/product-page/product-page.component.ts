import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: any | undefined;
  imageUrl: string = '';

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.productService.getProduct(id).subscribe((data: {}) => {
      this.product = data;
      this.imageUrl = this.product.thumbImageUrl;
      console.log(this.product);
    });
  }

}
