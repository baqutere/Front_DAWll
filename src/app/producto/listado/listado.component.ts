import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { Producto } from 'src/app/services/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Proveedor } from 'src/app/services/proveedor/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  productos: Producto[] = [];
  nomPro: String = "";
  proveedores: Proveedor[];
  proveedor: Proveedor;
  listSize: any=0;
  constructor(private productoService: ProductoService,private proveedorService: ProveedorService,private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.listarProducto();
  }

  listarProducto() {
    this.productoService.listar().subscribe(data =>{
      this.productos = data;
      this.productos.forEach(element=>{
        this.listSize++;
        this.proveedorService.obtener(Number(element.proveedorId)).subscribe(prov=>{
          element.proveedorNombre=prov.nomProvee;
        });        
      });
    });
  }

  registrarProducto(listSize: any){
    this.router.navigate(['producto/registrar'], {queryParams: {listSize: listSize}});
  }

  editarProducto(id: number){
    console.log(id);
    this.router.navigate(['producto/editar',id])
  }
  
  buscarProducto(name: String) {
    this.productoService.buscar(name).subscribe(data =>{
      this.productos = data;
    });
  }
  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productoService.eliminar(id).subscribe(() => {
        this.listarProducto(); // Actualiza la lista de productos
      }, error => {
        console.error('Error al eliminar el producto:', error);
      });
    }
  }

  detalleProducto(id: number) {
    this.router.navigate(['producto/detalle',id])
  }

  regresar() {
    this.router.navigate(['inicio'])
  }

  limpiar() {
    this.listarProducto();
  }
 
}