import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { MyValidators } from './../../../utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuider: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: Params)  => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
        .subscribe(product => {
          this.form.patchValue(product)
        })
    })
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product) 
        .subscribe((newProduct) =>{
          this.router.navigate(['./admin/products'])
          console.log(newProduct)
        })
    }
  }

  private buildForm() {
    this.form = this.formBuider.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]
    })
  }

  get priceField() {
    return this.form.get('price');
  }

}
