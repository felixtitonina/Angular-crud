import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product // inporta a model

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute // ajuda a pegar o Id Pelo params
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') // pego o parametro
    // faz chamado no service com o metodo readbyId e assim consigo pegar o id pela navegação
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!!!")
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
