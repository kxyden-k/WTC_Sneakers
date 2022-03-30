import { Injectable } from '@angular/core';
import {Sneaker} from "./core/sneaker";
import {Sneakers} from "./mock-sneakers";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {Product} from "./core/product";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private REST_API_SERVER = "https://localhost:50875/api";
  rootURL = '/api/Products';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getProducts(): Observable<Product>{

    return this.http
      .get<Product>(this.REST_API_SERVER + '/Products')
      .pipe(retry(1), catchError(this.handleError));
  }

  public getProduct(id: any): Observable<Product>{
    return this.http
      .get<Product>(this.REST_API_SERVER + '/Products/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  public createProduct(product: any): Observable<Product> {
    return this.http
      .post<Product>(
        this.REST_API_SERVER + '/Products',
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
