export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    category: string;
    rating: number;
    inStock: boolean;
    description: string;
    sizes?: string[];
    colors?: string[];
  }
  
  export interface CartItem extends Product {
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    image: string;
    itemCount: number;
  }