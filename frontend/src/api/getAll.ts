import { OrderItem, Product, UserData } from '../types/types.ts';

const BASE_URL = 'http://localhost:3000/';

/* Atention! This method needs to be updated by api end point correctly */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authUser = (data: {email: string, password: string}) => fetch(`${BASE_URL}users/authenticateUser`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})
    .then(response => {
      if(!response.ok) {
        throw new Error('No Message');
      }

      return response.json();
    })
    .then(respondedData => {
      console.log(respondedData, 'fdajkdakjfçakdjfçakjfç');
      return respondedData.data as UserData;
    });

export const getProducts = (category: string): Promise<Product[]> => {
  return fetch(`${BASE_URL}products/allProducts/${category}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('No fones to show');
      }
      return response.json();
    })
    .then(response => response.data as Product[]);
};

export const getProductByID = (id: string | undefined): Promise<Product> => {
  return fetch(`${BASE_URL}products/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      return response.json();
    })
    .then(res => res.data as Product);
};

export const getAllFavorites = (tokenSession: string): Promise<Product[]> => {
  return fetch(`${BASE_URL}favorites/getFavorites`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenSession}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch favorites: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data as Product[]);
};

export const addFavorite = (productId: string, tokenUser: string) => {
  return fetch(`${BASE_URL}favorites/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${tokenUser}`,
    },
    body: JSON.stringify({ productId }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to add favorite: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data);
};

export const deleteFavorite = (productId: string, tokenSession: string) => {
  return fetch(`${BASE_URL}favorites/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenSession}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to add favorite: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data);
};

export const getNewestModels = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}homepage/newestModels`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch newest models: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.data as Product[]);
};

export const getHotPrices = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}homepage/hotPrices`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch hot prices: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.data as Product[]);
};

export const getActiveCart = (tokenSession: string): Promise<OrderItem[]> => {
  return fetch(`${BASE_URL}orders/getOrders`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenSession}`,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to find Active Order: ${response.statusText}`);
      }
      return response.json();
    })
    .then(response => {
      console.log(response.data[0].orderItems);
      return response.data[0].orderItems as OrderItem[]});
}

export const insertItemOnCart = (productId: string, tokenSession: string): Promise<OrderItem> => {
  return fetch(`${BASE_URL}orders/insertItemInOrder`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenSession}`,
      },
      body: JSON.stringify({productId: productId}),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Fail to add Product In Cart: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.data as OrderItem);
  }

  export const updateItemInOrder = (itemId: string, quantity: number, tokenSession: string): Promise<OrderItem> => {
    return fetch(`${BASE_URL}orders/updateOrderItem/${itemId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenSession}`,
        },
        body: JSON.stringify({quantity: quantity}),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Fail to update item in Cart: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => data.data as OrderItem);
    }

export const deleteItemOrder = (itemId: string, quantity: number, tokenSession: string): Promise<void> => {
  return fetch(`${BASE_URL}orders/deleteOrderItem/${itemId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenSession}`,
      },
      body: JSON.stringify({quantity: quantity}),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Fail to delete: ${response.statusText}`);
      }
    })
  }

      