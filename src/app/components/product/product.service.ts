import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({ // decoretor informa que poder ser injetada em outras class
  // trabalha com uma instancia compartilhada
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products'
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient // injetamos o modulo de http para usar com nossa funcionalidade
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  // chamada no bakenc p/ salvar registro
  create(product: Product): Observable<Product> { // precisa apontar o tipo de observable q ira receber e metodo ex: post
    return this.http.post<Product>(this.baseUrl, product)

  }
}