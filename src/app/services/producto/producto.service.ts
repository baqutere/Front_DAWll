import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../proveedor/proveedor';
import { ProveedorService } from '../proveedor/proveedor.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  proveedores: Proveedor[] = [];
  private baseUrl = 'http://localhost:8082/api/producto';

  constructor(private http: HttpClient, private proveedorService: ProveedorService) { }

  public listar(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.baseUrl);
  }

  public obtenerProducto(id: number): Observable<Producto>{
    return  this.http.get<Producto>(this.baseUrl + `/${id}`);
  }
  public registrar(producto: Producto): Observable<any>{
    return this.http.post<any>(this.baseUrl,producto);
  }
  public buscar(name: String): Observable<Producto[]>{
    return  this.http.get<Producto[]>(this.baseUrl + `/buscar?name=${name}`);
  }
  public editar(id: number, producto: Producto):Observable<any>{
    return this.http.put(this.baseUrl + `/${id}`,producto)
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
