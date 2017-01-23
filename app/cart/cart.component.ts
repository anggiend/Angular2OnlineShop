import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from '../_services/cart.service';
import { Item } from '../_models/cart';

@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit{
  items : Item[] = [];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {  //pertama kali akses class ini apa yg harus dilakukan
    this.items = this.getItem();
  }

  getItem():Item[]{
    return this.cartService.getCart();
  }
  
    gotoHome(): void {
      this.router.navigate(['/home/']);}
  }
