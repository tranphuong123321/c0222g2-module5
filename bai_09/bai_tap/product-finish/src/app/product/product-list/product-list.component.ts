import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idToDelete: number;
  nameToDelete: string;
  p = 1;
  name: string;

  constructor(private productService: ProductService,
              private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.idToDelete).subscribe((data) => {
      this.toast.success('Xóa thành công');
      this.getProduct();
    });
  }

  showMess(id: any, name: any) {
    this.idToDelete = id;
    this.nameToDelete = name;
  }

  getString(value: string) {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
      this.name = value.toLocaleLowerCase();
      const arr: Product[] = [];
      this.products.forEach(temp => {
        if (temp.name.toLocaleLowerCase().includes(this.name)) {
          arr.push(temp);
        }
      });
      this.products = arr;
    });
  }
}
