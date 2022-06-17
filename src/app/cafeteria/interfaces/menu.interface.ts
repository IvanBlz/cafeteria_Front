import { Articulo } from "./articulo.interface";

export interface Menu {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
    categoria: string;
    platillos: Articulo[];
}   