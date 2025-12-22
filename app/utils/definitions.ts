export interface Link {
    label: string;
    link: string;
}

export interface Employee {
    name: string;
    phone: string;
    area: string;
    photo_url: string;
    salary: number;
    genre: string;
}

export interface Meeting {
    employee: string;
    day: Date;
    hour: number;
    minute: number;
}

export interface Product {
    id: number;
    name: string;
    area: ProductArea;
    price: number;
    hasDiscount: boolean;
    discount: number | undefined;
    stock: number;
}

export interface ProductArea {
    id: number;
    name: string;
}

export interface Sale {
    product: Product;
    quantity: number;
}

export interface Delivery{
    id:number;
    product:Product;
    quantity:number;
    deliveryDate:Date;
    supplier:string;
    status: "Entregado" | "Pendiente" | "En tránsito";
}
