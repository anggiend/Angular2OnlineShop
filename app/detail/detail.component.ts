import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';
import { Detail } from '../_models/detail';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit{
  product: Product;
  detail: Detail;
  kode_barang: string;
  cart : any[]=[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
	private router: Router) { }

  ngOnInit(): void {
    this.product ={  kode_barang : 'Bj1' ,
        kode_tipe : 'woman' ,
        nama_barang : 'Abaya Dress' ,
        deskripsi_barang : 'Outer dengan bahan kain lembut , cocok untuk digunakan ketika bersantai ' ,
        harga_barang :  350000 ,
        tanggal_datang : new Date('2016-11-12T00:00:00') ,
        ukuran : 'M',
        image : '../../image/1.jpg'};
    this.detail = { kode_barang : 'Bj1',
      warna : 'Hitam',
      bahan : 'Katun',
      stock : 12 };
    this.route.params.subscribe(
      (param: Params) => {
        this.kode_barang = param['kode_barang'];
      });
    this.getProduct(this.kode_barang);
    this.getDetail(this.kode_barang);
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

	gotoHome(): void {
      this.router.navigate(['/home/']);}
}
