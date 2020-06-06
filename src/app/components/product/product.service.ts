import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Product } from './product.model';
import { Observable, ObservableLike, empty, EMPTY } from 'rxjs';

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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }
  // chamada no bakenc p/ salvar registro
  create(product: Product): Observable<Product> { // precisa apontar o tipo de observable q ira receber e metodo ex: post
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readById(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }
  delete(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }
  errorHandler(e: any): Observable<any> {
    // console.log(e)
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }
}