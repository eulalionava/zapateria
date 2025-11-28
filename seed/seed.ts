export interface SeedProduct {
    id:number
    name:string,
    description: "Tenis Nike Air Force para niña, con diseño clásico y comodidad excepcional.",
    images: string[],
    inStock: number,
    priceFabric:number
    price: number,
    sizes: string[]
    marca: string,
    gender:string,
    category:string,
    color:string,
    inPromo:boolean,
    descuento:number,
    fecha_creacion:string,
    fecha_update?:string,
    active:boolean,
    destacado?:boolean,
    inCarrusel:boolean
}

interface SeedData {
    categories:string[]
    products: SeedProduct[],
}

export const seed:SeedData = {
    categories:[
        'running','futbool','basquetbool','casual','botas','tenis','zapatillas'
    ],
    products:[
        {
            id:1,
            name:"Tenis Air for",
            description: "Tenis Nike Air Force para niña, con diseño clásico y comodidad excepcional.",
            images: [
                'tenis_basquet-1.png',
                'tenis_basquet_2.png',
                'jordan_morado_1.png',
                'jordan_verde_claro.png'
            ],
            inStock: 7,
            priceFabric:200,
            price: 290,
            sizes: ['24','25','26'],
            marca: "nike",
            gender:'girl',
            category:'basquetbool',
            color:'Negro con blanco',
            inPromo:false,
            descuento:0,
            fecha_creacion:'',
            fecha_update:'',
            active:true,
            destacado:false,
            inCarrusel:true
        },
        {
            id:2,
            name:"Tenis Air for",
            description: "Tenis Nike Air Force para niña, con diseño clásico y comodidad excepcional.",
            images: [
                'tenis_basquet_2.png',
                'tenis_basquet-1.png',
                'jordan_morado_1.png',
                'jordan_verde_claro.png'
            ],
            inStock: 7,
            priceFabric:200,
            price: 300,
            sizes: ['24','25','26'],
            marca: "nike",
            gender:'girl',
            category:'basquetbool',
            color:'Negro con blanco',
            inPromo:false,
            descuento:0,
            fecha_creacion:'',
            fecha_update:'',
            active:true,
            destacado:false,
            inCarrusel:true
        },
        {
            id:3,
            name:"Tenis Air for",
            description: "Tenis Nike Air Force para niña, con diseño clásico y comodidad excepcional.",
            images: [
                'jordan_morado_1.png',
                'tenis_basquet-1.png',
                'tenis_basquet_2.png',
                'jordan_verde_claro.png'
            ],
            inStock: 7,
            priceFabric:200,
            price: 200,
            sizes: ['24','25','26'],
            marca: "nike",
            gender:'girl',
            category:'basquetbool',
            color:'Negro con blanco',
            inPromo:false,
            descuento:0,
            fecha_creacion:'',
            fecha_update:'',
            active:true,
            destacado:false,
            inCarrusel:false
        }
    ]
}