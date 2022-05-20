import { Product } from "./product";

export interface Item {
    id: number;
    quantity: number;
    subtotal:number;
    product:Product;
}
