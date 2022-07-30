export interface Category {
    id: number;
    name: string;
    icon: string;
  }
  
  export interface Food {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }
  
  export interface Data {
    category: Category;
    foods: Food[];
  }
  
  export interface IBurger {
    message: string;
    data: Data;
  }
  


