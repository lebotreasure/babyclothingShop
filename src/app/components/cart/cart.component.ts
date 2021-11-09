import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts: any;
  cartDetails: any;
  
  constructor(private productsService: ProductsService) {}

  getCart(): void {
    this.productsService.getCartItems().subscribe((data: any) => {
      this.carts = data;
      this.cartDetails = data;
      // console.log(this.carts);
    });
  }

  increamentQTY(id: any, quantity: any): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.productsService.increaseQty(payload).subscribe(() => {
      this.getCart();
      alert('Product Added');
    });
  }

  decreaseQty(id: any, quantity: any): void {
    const payload = {
      productId: id,
      quantity
    };
    this.productsService.decreaseQty(payload).subscribe(() => {
      alert('Product removed');
    })
  }

  emptyCart(): void {
    this.productsService.emptyCart().subscribe(() => {
      this.getCart();
      alert('Cart Emptied');
    });
  }

  ngOnInit(): void {
    this.getCart();
  }

}
