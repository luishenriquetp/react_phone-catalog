import { FullProduct, Product, SessionData } from '../types/types.ts';

export const getProducts = (): Promise<Product[]> => {
  return fetch('/api/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Product[])
    .catch(error => {
      throw error;
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductByID = (_ID: string | undefined): Promise<FullProduct> => {
  return fetch('/api/mockProduct.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as FullProduct)
    .catch(error => {
      throw error;
    });
};


export const getSessionData = (idSession: string): Promise<SessionData> => {
  return fetch(`/api/userSessions/${idSession}.json`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => data[0] as SessionData);
};