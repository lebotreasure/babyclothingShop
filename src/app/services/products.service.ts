import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${environment.baseURL}/items`);
  }
  // addToCart(payload:any) {
  //   return this.http.post(`${environment.baseURL}/items`, payload);
  // }
  // getCartItems() {
  //   return this.http.get(`${environment.baseURL}/items`);
  // }
  // increaseQty(payload:any) {
  //   return this.http.post(`${environment.baseURL}/items`, payload);
  // }
  // emptyCart() {
  //   return this.http.delete(`${environment.baseURL}/items/empty-cart`);
  // }

}
