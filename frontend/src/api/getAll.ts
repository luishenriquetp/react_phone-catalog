import { Product, UserData } from '../types/types.ts';

const BASE_URL = 'http://localhost:3000/';

export const getProducts = (): Promise<Product[]> => {
  return fetch('http://localhost:3000/products/allProducts')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data as Product[]);
};
/* Atention! This method needs to be updated by api end point correctly */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductByID = (id: string | undefined): Promise<Product> => {
  return fetch('/api/mockProduct.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      return response.json();
    })
    .then(data => data as Product);
};

export const authUser = (data: {email: string, password: string}) => fetch(`${BASE_URL}users/authenticateUser`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer seuTokenDeAutenticacao', // Adicione seu token de autenticação aqui
  },
  body: JSON.stringify(data)})
    .then(response => {
      if(!response.ok) {
        throw new Error('Fail to authentication');
      }

      return response.json();
    })
    .then(data => {
      return data.data as UserData;
    });