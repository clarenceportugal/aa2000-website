export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  specs: ProductSpecs;
  inclusions: string[];
  installationPrice: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface DiscountResult {
  success: boolean;
  message: string;
}
