import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，是我再学习angular入门实战是创建的",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",2.99,2.5,"这是第二个商品，是我再学习angular入门实战是创建的",["电子产品","硬件设备"]),
    new Product(3,"第三个商品",3.99,4.5,"这是第三个商品，是我再学习angular入门实战是创建的",["硬件设备"]),
    new Product(4,"第四个商品",4.99,1.5,"这是第四个商品，是我再学习angular入门实战是创建的",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",5.99,3.5,"这是第五个商品，是我再学习angular入门实战是创建的",["电子产品","硬件设备"]),
    new Product(6,"第六个商品",6.99,2.5,"这是第六个商品，是我再学习angular入门实战是创建的",["电子产品","硬件设备"]),
  ]
  private comments:Comment[] = [
    new Comment(1,1,"2017-02-23 22:22:22","张三",3,"东西不错1"),
    new Comment(2,1,"2018-04-05 15:22:22","李四",3,"东西不错2"),
    new Comment(3,1,"2014-06-03 16:22:22","王五",3,"东西不错3"),
    new Comment(4,2,"2016-07-02 09:22:22","马六",3,"东西不错4"),
  ]
  constructor() { }
  getProducts() {
    return this.products;
  }
  // 根据商品ID 找出相应商品
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id == id)
  }
  // 获取商品评论的方法
  getCommentsForProductId(id:number): Comment[] {
    return this.comments.filter((comment:Comment) => comment.productId == id)
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){}
}
export class Comment {
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}