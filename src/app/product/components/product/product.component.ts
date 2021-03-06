import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements  OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService
  ) {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges'); 
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {   
    console.log('DoCheck')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')
    
  }
  addCart(){
    console.log('Añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClick.emit(this.product.id);
  }

}