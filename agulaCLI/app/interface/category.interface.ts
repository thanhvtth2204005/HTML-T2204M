export interface Datum {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export interface ICategoryComponent {
    message: string;
    data: Datum[];
}