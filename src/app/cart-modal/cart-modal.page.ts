import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {


  cart: Product[] = [];

  constructor(private cartSvc: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {

    this.cart = this.cartSvc.getCart();
  }

  decreasecartItem(product){

    this.cartSvc.decreaseProduct(product)

  }

  increaseCartItem(product){

    this.cartSvc.addProduct(product);

  }

  removeCartItem(product){

    this.cartSvc.removeProduct(product);

  }

  getTotal(){
    return this.cart.reduce((i,j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout(){
    
  }

}
