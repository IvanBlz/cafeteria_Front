
import { Mesa } from "./mesa.interface";
import { Option } from './modal.interface';

export interface Ordenes {
    id: number;
    mesa: Mesa;
    platillo: Option[];
    total: number;
}
