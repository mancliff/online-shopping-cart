import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  products= [];
  cartItemCount: BehaviorSubject<number>;


  constructor(private cartSvc: CartService, private modalCtrl: ModalController) {}

  options={
    centeredslides: true,
    loop: true,
    spaceBetween: -100,
  };

  ngOnInit(){

    this.products = this.cartSvc.getProducts();
    this.cart = this.cartSvc.getCart();
    this.cartItemCount = this.cartSvc.getCartItemCount();
  }

  AddToCart(product){

    this.cartSvc.addProduct(product);

  }

  async openCart(){
    let modal= await this.modalCtrl.create({
      component:  CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
    
  }

}


