import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';
import { Detail } from '../_models/detail';
import { CartService } from  '../_services/cart.service';
import { Item } from '../_models/cart';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit{
  product = new Product();
  detail: Detail[] = [];
  item = new Item();
  kode_barang: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
	private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.kode_barang = param['kode_barang'];
      });
    this.getProduct(this.kode_barang);
    this.getDetail(this.kode_barang);
    this.item.quantitas =  2;
  }


  getProduct(kode_barang : string): void {
    this.productService
        .getProduct(kode_barang)
        .then(products => this.product = products);
  }

  getDetail(kode_barang : string) : void {
    this.productService
      .getDetail(kode_barang)
      .then(details => this.detail = details);
  }

  gotoCart(): void {
      this.router.navigate(['/cart/']);}

  addtoCart(product: Product) : void{
      this.item.kode_barang = product.kode_barang;
      this.item.kode_tipe = product.kode_tipe;
      this.item.nama_barang = product.nama_barang;
      this.item.harga_barang = product.harga_barang;
      this.item.ukuran = product.ukuran;
      this.item.image = product.image;
      this.cartService.addItem(this.item);
      window.alert(this.item.nama_barang +" has been added to Cart");
  }

	gotoHome(): void {
      this.router.navigate(['/home/']);}
}
