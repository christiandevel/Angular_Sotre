import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product
      })
  } 

  createProduct() {
    const newProduct: Product = {
      id: "12",
      image: "assets/images/stickers1.png",
      title: "Ultimo Ingresado",
      price: 80000,
      description: "Bla bla bla bla"
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product)
      })
  }
  
  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: "Ultimo Ingresado 30 de Diciembre del 2020",
      price: 50000,

    };
    this.productsService.updateProduct('12', updateProduct)
    .subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct() {
    this.productsService.deleteProduct('12')
    .subscribe(product => {
      console.log(product)
    })
  }

}
