
export interface Size{
    id:string
    name:string
    active:boolean
}

export interface Gender {
    id:string
    name:string
    active:boolean
}

export interface Category {
    id:string
    name:string
    active:boolean
}

export interface Producto {
    name: string;
    images: FileList;
    stock: string;
    priceFabric: string;
    price: string;
    sizes: string[];
    marca: string;
    gender: string;
    category: string;
    color: string;
    carrusel: string;
    activepromotion: string;
    descuento?: number;
} 