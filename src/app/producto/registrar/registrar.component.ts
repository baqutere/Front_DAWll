import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/services/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Proveedor } from 'src/app/services/proveedor/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  productos: Producto[] = [];
  proveedores: Proveedor[];
  newProducto: Producto ={
    id: 0,
    codPro: '',
    nomPro: '',
    proveedorId: 0,
    proveedorNombre:'',
    stock: 0,
    precio : 0,
    fechaCompra: new Date(),
  }
  private codigoContador: number = 0; // Contador inicial

  constructor(
    private productoService: ProductoService, 
    private proveedorService: ProveedorService, 
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.queryParams['listSize'];
    this.codigoContador=Number(id)+2;
    this.autoAsignarCodigo(); // Genera el código automáticamente al inicializar
    
    this.proveedorService.listar().subscribe(
      (data: any[]) => {
        this.proveedores = data;
      },
      (error) => {
        console.error('Error al obtener los proveedores', error);
      }
    )
  }

  obtenerProducto(){
    const id = this.route.snapshot.params['id'];
    this.productoService.obtenerProducto(id).subscribe(
      response =>{this.newProducto = response},
    );
  }
  registrarProducto() {  
    this.productoService.registrar(this.newProducto).subscribe(
        Response => {
        //console.log('Atencion Registrada con éxito: ', Response);
        // Incrementar el contador solo si el registro fue exitoso
        
        this.codigoContador++;
          this.newProducto = {
            id: 0,
            codPro: '',
            nomPro: '',
            proveedorId: 0,
            proveedorNombre:'',
            stock: 0,
            precio : 0,
            fechaCompra: new Date(),
          };
          
             // Asignar un nuevo código para el siguiente producto
          this.autoAsignarCodigo();
          console.log('Atencion Registrada con éxito: ', Response);
          this.router.navigate(['/producto/listar']);
        },
        error =>{
          console.error('Error al registrar el producto',error)
        }
      );
     return this.regresar();
    }

    regresar() {
        this.router.navigate(['producto/listar'])
      }

    autoAsignarCodigo() {
        this.newProducto.codPro = this.generarCodigo();
      }
    
      generarCodigo(): string {
          // Formatear el número con ceros a la izquierda

          this.productoService.listar().subscribe(data =>{
            this.productos = data;
            this.productos.forEach(element => {
              this.codigoContador++;
            });
          
          });
          const codigoFormateado = String(this.codigoContador).padStart(4, '0');
          const codigoFinal = 'PROD-' + codigoFormateado;
          // Incrementar el contador para el siguiente producto

      
          return codigoFinal;
        }
       

}
