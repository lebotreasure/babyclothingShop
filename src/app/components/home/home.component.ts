import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // products: Array<object> = [];
  // constructor(private prodService: ProductsService) {}
  // _getProducts(): void {
  //   this.prodService.getAllProducts().subscribe((data: any) => {
  //     this.products = data;
  //     console.log(this.products);
  //   });
  // }

  // _addItemToCart( id:any, quantity:any): void {
  //   let payload = {
  //     productId: id,
  //     quantity,
  //   };
  //   this.prodService.addToCart(payload).subscribe(() => {
  //     this._getProducts();
  //     alert('Product Added');
  //   });
  // }
  ngOnInit(): void {
    // this._getProducts();
  }


}
