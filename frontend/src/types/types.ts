type Description = {
  title: string;
  text: string[];
};
export type Product = {
  id: string;
  category: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  image: string;
  description?: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
  year: number;
};

export interface UserData {
  tokenSession: string;
  name: string;
  email: string
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
}