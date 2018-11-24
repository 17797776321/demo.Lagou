import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  imgList:'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%BD%AE%E6%92%AD%E6%A8%A1%E6%9D%BF&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=301121930,3379730111&os=684545985,4189837469&simid=4143814266,783891927&pn=15&rn=1&di=194679795640&ln=1603&fr=&fmq=1543043503958_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fbpic.wotucdn.com%2F16%2F27%2F93%2F16279331-62dcac9c7136bbefd2ffc3f5711ced31.jpg&rpstart=0&rpnum=0&adpicid=0'
  constructor() { }

  ngOnInit() {
  }

}
