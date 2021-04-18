import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item=CartItems.find(c=>c.product.productId===product.productId);
    
    if(item){
      item.quantity+=1;
    }else{
      let cartItem=new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(cartItem:CartItem){
    // let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    // item=item?item:new CartItem(); //strictNullChecks
    let itemIndex=CartItems.indexOf(cartItem);
    CartItems.splice(itemIndex,1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
