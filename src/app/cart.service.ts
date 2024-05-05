import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { };

  addToCart(product: Product){ //добавляет продукт к массиву items
    this.items.push(product);
  }

  getItems(){      //собирает товары, которые пользователи добавляют в корзину, и вохзвращает каждый товар с соответствующим количеством
    return this.items;
  }

  clearCart(){  //возвращает пустой массив товаров, который опустошает корзину
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]> ('/assets/shipping.json');
  }

}
