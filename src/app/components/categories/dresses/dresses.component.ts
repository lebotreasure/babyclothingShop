import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent implements OnInit {

  products: Array<object> = [];
  
  constructor(private productsService: ProductsService) {}
  getProducts(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.products = data;
      // console.log(this.products);
    });
  }

  addItemToCart(id:any, quantity:any): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.productsService.addToCart(payload).subscribe(() => {
      this.getProducts();
      alert('Product Added');
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
