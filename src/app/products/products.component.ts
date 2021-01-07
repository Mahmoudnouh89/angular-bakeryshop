import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  form: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.initForm();
    this.productService.getProducts().subscribe((products) => {
      this.products = products.sort((a, b) => a.price - b.price);
      // TODO: Order the products by price
    });
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      quantity: [''],
      store: ['']
    });
  }

  addProduct(): void {
    const newProduct: Product = {
      name: this.form.get('name').value,
      price: this.form.get('price').value,
      quantity: this.form.get('quantity').value,
      store: this.form.get('store').value
    };
    this.products.push(newProduct);
    this.initForm();
  }
}
