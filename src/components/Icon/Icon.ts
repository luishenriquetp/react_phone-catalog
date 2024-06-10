/* eslint-disable no-shadow */
import React, { SVGProps } from 'react';
import ArrowDown from '../../assets/Arrow-down.svg';
import ArrowUp from '../../assets/Arrow-up.svg';
import ArrowRight from '../../assets/Arrow-right.svg';
import ArrowLeft from '../../assets/Arrow-left.svg';
import Close from '../../assets/Close.svg';
import EmptyHeartlike from '../../assets/HeartLike-empty.svg';
import CounterHeartlike from '../../assets/HeartLike-count.svg';
import FilledHeartlike from '../../assets/HearLike-filled.svg';
import Home from '../../assets/Home.svg';
import Menu from '../../assets/Menu.svg';
import Minus from '../../assets/Minus.svg';
import Plus from '../../assets/Plus.svg';
import Search from '../../assets/Search.svg';
import EmptyCart from '../../assets/Empty-cart.svg';
import CounterCart from '../../assets/Counter-cart.svg';

export enum IconType {
  ARROW_DOWN = 'arrow-down-icon',
  ARROW_UP = 'arrow-up-icon',
  ARROW_RIGHT = 'arrow-right-icon',
  ARROW_LEFT = 'arrow-left-icon',
  CLOSE = 'close-icon',
  EMPTY_HEARTLIKE = 'empty-heartlike-icon',
  COUNTER_HEARTLIKE = 'counter-heartlike-icon',
  FILLED_HEARTLIKE = 'filled-heartlike-icon',
  HOME = 'home-icon',
  MENU = 'menu-icon',
  MINUS = 'minus-icon',
  PLUS = 'plus-icon',
  SEARCH = 'search-icon',
  EMPTY_CART = 'empty-cart-icon',
  COUNTER_CART = 'counter-cart-icon',
}

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  icon: IconType;
};

type IconMap = {
  [key in IconType]: React.FC<SVGProps<SVGSVGElement>> | string;
};

export const iconMap: IconMap = {
  [IconType.ARROW_DOWN]: ArrowDown,
  [IconType.ARROW_UP]: ArrowUp,
  [IconType.ARROW_RIGHT]: ArrowRight,
  [IconType.ARROW_LEFT]: ArrowLeft,
  [IconType.CLOSE]: Close,
  [IconType.EMPTY_HEARTLIKE]: EmptyHeartlike,
  [IconType.COUNTER_HEARTLIKE]: CounterHeartlike,
  [IconType.FILLED_HEARTLIKE]: FilledHeartlike,
  [IconType.HOME]: Home,
  [IconType.MENU]: Menu,
  [IconType.MINUS]: Minus,
  [IconType.PLUS]: Plus,
  [IconType.SEARCH]: Search,
  [IconType.EMPTY_CART]: EmptyCart,
  [IconType.COUNTER_CART]: CounterCart,
};
