/* eslint-disable no-shadow */
import React, { SVGProps } from 'react';
import ArrowDown from '../../IconAssets/Arrow-down.svg';
import ArrowUp from '../../IconAssets/Arrow-up.svg';
import ArrowRight from '../../IconAssets/Arrow-right.svg';
import ArrowLeft from '../../IconAssets/Arrow-left.svg';
import Close from '../../IconAssets/Close.svg';
import EmptyHeartlike from '../../IconAssets/HeartLike-empty.svg';
import CounterHeartlike from '../../IconAssets/HeartLike-count.svg';
import FilledHeartlike from '../../IconAssets/HearLike-filled.svg';
import Home from '../../IconAssets/Home.svg';
import Menu from '../../IconAssets/Menu.svg';
import Minus from '../../IconAssets/Minus.svg';
import Plus from '../../IconAssets/Plus.svg';
import Search from '../../IconAssets/Search.svg';
import EmptyCart from '../../IconAssets/Empty-cart.svg';
import CounterCart from '../../IconAssets/Counter-cart.svg';
import Config from '../../IconAssets/Config.svg';

export enum IconType {
  ARROW_DOWN = 'arrow-down-icon',
  ARROW_UP = 'arrow-up-icon',
  ARROW_RIGHT = 'arrow-right-icon',
  ARROW_LEFT = 'arrow-left-icon',
  CLOSE = 'close-icon',
  CONFIG = 'config',
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
  [IconType.CONFIG]: Config,
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
