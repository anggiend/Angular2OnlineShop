import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';
import { Tipe } from '../_models/tipe';
import { TipeService } from '../_services/tipe.service';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
  products: Product[];
  tipes : Tipe[];

  constructor(
    private productService: ProductService,
    private tipeService : TipeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getTipes();
  }

  getProducts(): void {
    this.productService
        .getProducts()
        .then(products => this.products = products);
  }

  getTipes() : void {
    this.tipeService
      .getTipes()
      .then(tipes => this.tipes = tipes);
  }

	gotoDetail(kode_barang : string): void {
      this.router.navigate(['/detail/',kode_barang]);}

	gotoCart(): void {
      this.router.navigate(['/cart/']);}
	  
  
	gotoHome(): void {
      this.router.navigate(['/home/']);}
}
