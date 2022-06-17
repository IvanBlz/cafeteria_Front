import { Articulo } from "./articulo.interface";
import { Option } from './modal.interface';

export interface Platillo {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
    ingredientes: Option[];

}
