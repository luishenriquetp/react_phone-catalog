/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../../types/types.ts';

interface CartState {
  phones: Phone[];
  quantity: number[];
  totalPrice: number;
}

const initialState: CartState = {
  phones: [
    {
      id: 'apple-iphone-11-128gb-black',
      category: 'phones',
      namespaceId: 'apple-iphone-11',
      name: 'Apple iPhone 11 128GB Black',
      capacityAvailable: ['64GB', '128GB', '256GB'],
      capacity: '128GB',
      priceRegular: 1100,
      priceDiscount: 1050,
      colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
      color: 'black',
      images: [
        'img/phones/apple-iphone-11/black/00.webp',
        'img/phones/apple-iphone-11/black/01.webp',
        'img/phones/apple-iphone-11/black/02.webp',
        'img/phones/apple-iphone-11/black/03.webp',
        'img/phones/apple-iphone-11/black/04.webp',
      ],
      description: [
        {
          title: 'And then there was Pro',
          text: [
            'A transformative triple-camera system that adds tons of capability without complexity.',
            'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
          ],
        },
        {
          title: 'Camera',
          text: [
            'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
          ],
        },
        {
          title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
          text: [
            'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
          ],
        },
      ],
      screen: "6.1' IPS",
      resolution: '1792x828',
      processor: 'Apple A13 Bionic',
      ram: '4GB',
      camera: '12 Mp + 12 Mp + 12MP',
      zoom: 'Digital, 5x',
      cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
    },
    {
      id: 'apple-iphone-11-128gb-black',
      category: 'phones',
      namespaceId: 'apple-iphone-11',
      name: 'Apple iPhone 11 128GB Black',
      capacityAvailable: ['64GB', '128GB', '256GB'],
      capacity: '128GB',
      priceRegular: 1100,
      priceDiscount: 1050,
      colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
      color: 'black',
      images: [
        'img/phones/apple-iphone-11/black/00.webp',
        'img/phones/apple-iphone-11/black/01.webp',
        'img/phones/apple-iphone-11/black/02.webp',
        'img/phones/apple-iphone-11/black/03.webp',
        'img/phones/apple-iphone-11/black/04.webp',
      ],
      description: [
        {
          title: 'And then there was Pro',
          text: [
            'A transformative triple-camera system that adds tons of capability without complexity.',
            'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
          ],
        },
        {
          title: 'Camera',
          text: [
            'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
          ],
        },
        {
          title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
          text: [
            'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
          ],
        },
      ],
      screen: "6.1' IPS",
      resolution: '1792x828',
      processor: 'Apple A13 Bionic',
      ram: '4GB',
      camera: '12 Mp + 12 Mp + 12MP',
      zoom: 'Digital, 5x',
      cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
    },

    {
      id: 'apple-iphone-11-128gb-green',
      category: 'phones',
      namespaceId: 'apple-iphone-11',
      name: 'Apple iPhone 11 128GB Green',
      capacityAvailable: ['64GB', '128GB', '256GB'],
      capacity: '128GB',
      priceRegular: 1100,
      priceDiscount: 1050,
      colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
      color: 'green',
      images: [
        'img/phones/apple-iphone-11/green/00.webp',
        'img/phones/apple-iphone-11/green/01.webp',
        'img/phones/apple-iphone-11/green/02.webp',
        'img/phones/apple-iphone-11/green/03.webp',
        'img/phones/apple-iphone-11/green/04.webp',
      ],
      description: [
        {
          title: 'And then there was Pro',
          text: [
            'A transformative triple-camera system that adds tons of capability without complexity.',
            'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
          ],
        },
        {
          title: 'Camera',
          text: [
            'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
          ],
        },
        {
          title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
          text: [
            'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
          ],
        },
      ],
      screen: "6.1' IPS",
      resolution: '1792x828',
      processor: 'Apple A13 Bionic',
      ram: '4GB',
      camera: '12 Mp + 12 Mp + 12MP',
      zoom: 'Digital, 5x',
      cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
    },

    {
      id: 'apple-iphone-11-128gb-purple',
      category: 'phones',
      namespaceId: 'apple-iphone-11',
      name: 'Apple iPhone 11 128GB Purple',
      capacityAvailable: ['64GB', '128GB', '256GB'],
      capacity: '128GB',
      priceRegular: 1100,
      priceDiscount: 1050,
      colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
      color: 'purple',
      images: [
        'img/phones/apple-iphone-11/purple/00.webp',
        'img/phones/apple-iphone-11/purple/01.webp',
        'img/phones/apple-iphone-11/purple/02.webp',
        'img/phones/apple-iphone-11/purple/03.webp',
        'img/phones/apple-iphone-11/purple/04.webp',
      ],
      description: [
        {
          title: 'And then there was Pro',
          text: [
            'A transformative triple-camera system that adds tons of capability without complexity.',
            'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
          ],
        },
        {
          title: 'Camera',
          text: [
            'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
          ],
        },
        {
          title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
          text: [
            'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
          ],
        },
      ],
      screen: "6.1' IPS",
      resolution: '1792x828',
      processor: 'Apple A13 Bionic',
      ram: '4GB',
      camera: '12 Mp + 12 Mp + 12MP',
      zoom: 'Digital, 5x',
      cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
    },
  ],
  quantity: [1, 1, 4, 3],
  totalPrice: 9900,
};

const cartSlice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    incrementTotalPrice: (state: CartState, action: PayloadAction<Phone>) => {
      state.totalPrice += action.payload.priceDiscount;
      state.quantity[state.phones.findIndex(e => e.id === action.payload.id)] += 1;
    },
    decreaseTotalPrice: (state: CartState, action: PayloadAction<Phone>) => {
      state.totalPrice -= action.payload.priceDiscount;
      state.quantity[state.phones.findIndex(e => e.id === action.payload.id)] -= 1;
    },
    addProduct: (state: CartState, action: PayloadAction<Phone>) => {
      const isInCartYet = state.phones.findIndex(e => e.id === action.payload.id);

      if (isInCartYet === -1) {
        state.phones.push(action.payload);
        state.quantity.push(1);
        state.totalPrice += action.payload.priceDiscount;
      } else {
        state.quantity[isInCartYet] += 1;
        state.totalPrice += action.payload.priceDiscount;
      }
    },
    removeProduct: (state: CartState, action: PayloadAction<Phone>) => {
      const indxToErase = state.phones.findIndex(e => e.id === action.payload.id);
      state.phones.splice(indxToErase, 1);
      state.totalPrice -= action.payload.priceDiscount * state.quantity[indxToErase];
      state.quantity.splice(indxToErase, 1);
    },
  },
});

export const { incrementTotalPrice, decreaseTotalPrice, addProduct, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
