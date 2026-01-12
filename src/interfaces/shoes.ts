
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

export interface GetProduct {
    id:          string;
    name:        string;
    images:      Image[];
    inStock:     string;
    priceFabric: string;
    price:       string;
    sizes:       string;
    marca:       string;
    gender:      Gender;
    category:    Category;
    color:       string;
    inPromocion: boolean;
    descuento:   string;
    destacado:   boolean;
    inCarrusel:  boolean;
    active:      boolean;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Category {
    id:       string;
    name:      string;
    active:    boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Gender {
    id:       string;
    name:      string;
    active:    boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface Image {
    url: string;
}