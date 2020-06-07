import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  /**
   * 
   * @param productService 
   * O construtor injeta productService do products.service 
   */
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    /**
     * na inicializacao do componente ele vai chamar o this.productService
     * pegar todos produts 
     * alterar o variavel product: Product[]
     * 
     */
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
