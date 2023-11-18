import { ProductImage } from "./ProductImage";

export interface Product{
    id: number;
    name: string;
    price: number;
    images: ProductImage[];
    createdAt: string;
    updatedAt: string;
}