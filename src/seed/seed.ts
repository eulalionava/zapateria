export interface SeedProduct {
    id:number
    name:string,
    description: string
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
    genders:string[]
    sizes:string[]
    products: SeedProduct[],
}

export const seed:SeedData = {
    categories:[
        'running','futbool','basquetbool','casual','botas','tenis','zapatillas'
    ],
    genders:['men','woman','boy','girl','unisex'],
    sizes:['15','16','17','18','22','23','24','25','26','27','28'],
    products:[
        {
            id:1,
            name:"Tenis Air for",
            description: "Tenis Nike Air Force para niña, con diseño clásico y comodidad excepcional.",
            images: [
                'Tenis_gris_preview.png'
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
                'cupra_blanco.png',
                'cupra_blanco_2.png'
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
            name:"Zapatos De Baloncesto",
            description: "Jóvenes Zapatos De Baloncesto Profesional Con Suela De Goma",
            images: [
                'jordan_morado_1.png',
                'zapatos_morado_2.png',
                'zapatos_morado_3.png',
                'zapatos_morado_4.png'
            ],
            inStock: 7,
            priceFabric:660,
            price: 890,
            sizes: ['24'],
            marca: "nike",
            gender:'girl',
            category:'basquetbool',
            color:'Morado con blanco',
            inPromo:false,
            descuento:0,
            fecha_creacion:'',
            fecha_update:'',
            active:true,
            destacado:false,
            inCarrusel:true
        }
    ]
}