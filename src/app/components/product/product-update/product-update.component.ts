import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  // atributo product
  product: Product  // inporta a model

  constructor(
    private productService: ProductService,
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
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!!!")
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
