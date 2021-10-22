import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent implements OnInit {

  products: Array<object> = [];
  
  constructor(private http: ProductsService) {}
  getProducts(): void {
    this.http.getAllProducts().subscribe((data: any) => {
      this.products = data;
      // console.log(this.products);
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
