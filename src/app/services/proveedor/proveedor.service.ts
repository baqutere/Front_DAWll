import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseUrl = "http://localhost:8081/api/proveedor"
  constructor(private http: HttpClient) { }

  public listar(): Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(this.baseUrl);
  }
  public registrar(proveedor: Proveedor): Observable<any>{
    return this.http.post<any>(this.baseUrl,proveedor);
  }
  public editar(id: number, proveedor: Proveedor):Observable<any>{
    return this.http.put(this.baseUrl + `/${id}`,proveedor)
  }
  public obtener(id: number): Observable<Proveedor>{
    return  this.http.get<Proveedor>(this.baseUrl + `/${id}`);
  }
  public buscar(name: String): Observable<Proveedor[]>{
    return  this.http.get<Proveedor[]>(this.baseUrl + `?name=${name}`);
  }
  public eliminar(id: number):Observable<any>{
    return this.http.delete(this.baseUrl + `/${id}`);
  
  }
  //llamar proveedor a productos
  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(environment.urlHost+"/proveedor/listado");
  }
}
