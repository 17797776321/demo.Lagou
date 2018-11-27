import { Component, OnInit } from '@angular/core'
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  private products:Product[]

  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.getProducts()
    
  }
  getProducts():void{
    this.products = this.productService.getProducts()
  }
}
