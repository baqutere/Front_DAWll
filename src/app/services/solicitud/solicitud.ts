import { Producto } from "../proveedor/producto";


export interface Solicitud{

 
	id: number;
	idPro: number;
	nombreProducto: String,
	cantidad: number;
	idProveedor: number;
	nombreProveedor: String;
	correo: String
	fecha: Date;
	descripcion: String;
	objProducto?: Producto;
}