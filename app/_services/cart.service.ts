import { Product } from '../_models/product';
import { PRODUCTS } from '../_helpers/mock-product'
import { Injectable } from '@angular/core';
import { Detail } from '../_models/detail';
import { DETAILS } from '../_helpers/mock-detail'
import { Item } from '../_models/cart';

@Injectable()
export class CartService {
    private cart:Item[]=[];
    addItem(item:Item){
        item.id = this.cart.length + 1; // karna isi belum ada auto increment hitung panjang sebelumnya ditambah 1
        this.cart.push(item);
    }
    deleteItem(item:Item){
        this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
    }
    clearCart(){
        this.cart = [];
    }

    getCart():Item[]{
        return this.cart;
    }

    getTotalPrice(){
        let totalPrice = this.cart.reduce((sum, cartItem)=>{
            return sum+=cartItem.harga_barang*cartItem.quantitas, sum;
        },0);

        return totalPrice;
    }

    getTotal(quantitas:number, harga:number){
        return harga*quantitas; 
    }
}
