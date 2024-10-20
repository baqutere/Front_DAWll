import { Proveedor } from "../proveedor/proveedor";

export interface Producto {
    id: number;
    codPro: String;
    nomPro: String;
    proveedorId: Number;
    proveedorNombre: String;
    stock: Number; 
    precio : Number;
    fechaCompra: Date;
    objProveedor?: Proveedor;

}
