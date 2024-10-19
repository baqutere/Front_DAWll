import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from './solicitud';
import { environment } from 'src/environments/environment';
import { Producto } from '../proveedor/producto';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private baseUrl = "http://localhost:8083/api/solicitud"
  constructor(private http: HttpClient) { }

  public registrar(solicitud: Solicitud): Observable<any>{
    return this.http.post<any>(this.baseUrl,solicitud);
 
  }

  public listar(): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.baseUrl);
  }

  public buscarProducto(name: String): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.baseUrl + `/buscar?name=${name}`);
  }
}