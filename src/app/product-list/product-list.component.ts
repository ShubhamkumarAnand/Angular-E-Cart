import {Component} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name: string = 'iPhone-13';
  price: number = 1299;
  color: string = 'matte-black';
  discountedPercentage: number = 11.4;
  image: unknown = "./assets/images/Iphone.png"
  stock: number = 5
  itemAdded: number = 0

  getDiscountedPrice(): number {
    return this.price - ((this.price * this.discountedPercentage) / 100);
  }

  decreaseProductCount() {
    if (this.itemAdded > 0) {
      this.itemAdded--;
    }
  }

  increaseProductCount() {
    if (this.stock > this.itemAdded) {
      this.itemAdded += 1;
    }
  }

}
