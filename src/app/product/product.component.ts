import { Component, OnInit } from '@angular/core'
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import 'rxjs'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  private products:Product[]
  private keyword:string
  private titleFilter:FormControl = new FormControl
  constructor(private productService:ProductService) {
    this.titleFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value=>this.keyword = value)
  }

  ngOnInit() {
    this.getProducts()
    
  }
  getProducts():void{
    this.products = this.productService.getProducts()
  }
}
