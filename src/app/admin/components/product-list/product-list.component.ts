import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'titulo', 'price', 'actions'];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fecthProducts();
  }

  fecthProducts() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products
      })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(rta => {
        this.fecthProducts();
      })
  }

}
