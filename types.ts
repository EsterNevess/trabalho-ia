export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface User {
  username: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  refreshProducts: () => Promise<void>;
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: number, product: Partial<Product>) => Promise<void>;
  removeProduct: (id: number) => Promise<void>;
}
