import {Component, Input, OnInit} from '@angular/core';
import {Sneaker} from "../core/sneaker";
import { SneakerService } from "../sneaker.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../core/product";

@Component({
  selector: 'app-sneaker-page',
  templateUrl: './sneaker-page.component.html',
  styleUrls: ['./sneaker-page.component.css']
})
export class SneakerPageComponent implements OnInit {
  @Input() sellerDetails = { email: "", name: "" };

  imageUrl: string = '';
  sneaker: Sneaker | undefined;
  products: any = [];
  productO: any | undefined;

  getSneaker(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.sneakerService
      .getSneaker(id)
      .subscribe((sneaker) => (this.sneaker = sneaker));
  }

  constructor(private route: ActivatedRoute,
              private sneakerService: SneakerService,
              private productService: ProductService,
              public router: Router) { }

  ngOnInit() {
    this.getSneaker();
    this.imageUrl = this.sneaker?.media.smallImageUrl ?? '';
  }

  addProduct(product: any) {
    this.productO = {
      colorWay: this.sneaker?.colorway,
      gender: this.sneaker?.gender,
      id: 0,
      imageUrl: this.sneaker?.media.imageUrl,
      name: this.sneaker?.name,
      releaseDate: this.sneaker?.releaseDate,
      releaseYear: 2020,
      retailPrice: this.sneaker?.retailPrice,
      sellerEmail: this.sellerDetails.email,
      sellerUsername: this.sellerDetails.name,
      shoe: this.sneaker?.shoe,
      brand: {
        id: 0,
        name: "Nike"
      },
      smallIImageUrl: this.sneaker?.media.smallImageUrl,
      sneakerId: this.sneaker?.id,
      thumbImageUrl: this.sneaker?.media.thumbUrl,
      title: this.sneaker?.title
    };
    console.log(this.productO.sellerEmail);
    this.productService.createProduct(this.productO).subscribe((data: {}) => {
      this.router.navigate(['/']);
    });
  }

}
