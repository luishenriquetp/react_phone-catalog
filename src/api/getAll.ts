import { Accessorie, Phone, Product, Tablet } from '../types/types.ts';

export const getAccessories = (): Promise<Accessorie[]> => {
  return fetch('api/accessories.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch accessories: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Accessorie[])
    .catch(error => {
      throw error;
    });
};

export const getPhones = (): Promise<Phone[]> => {
  return fetch('api/phones.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch phones: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Phone[])
    .catch(error => {
      throw error;
    });
};

export const getProducts = (): Promise<Product[]> => {
  return fetch('api/products.json')
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

export const getTablets = (): Promise<Tablet[]> => {
  return fetch('api/tablets.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch tablets: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Tablet[])
    .catch(error => {
      throw error;
    });
};
