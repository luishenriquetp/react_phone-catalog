import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StyledCartItem from './StyledCartItem.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { OrderItem, Product } from '../../types/types.ts';
import {
  updateAllProducs,
} from '../../context/cartContext/cartSlice.ts';
import { deleteItemOrder, getActiveCart, getProductByID, updateItemInOrder } from '../../api/getAll.ts';
import { useAppSelector } from '../../context/hooks.ts';

interface Prop {
  firstOrder: OrderItem;
  setOrdersItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

function CartItem({setOrdersItems, firstOrder}: Prop): React.ReactNode {
  const [orderItem, setOrderItem] = useState(firstOrder);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const tokenSession = useAppSelector(state => state.user.tokenSession);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const dispatch = useDispatch();
  console.log(orderItem.quantity, ' and ', orderItem.totalPrice);

  useEffect(() => {
    getProductByID(orderItem.productId)
      .then(data => {
        setProduct(data);
        setLoadingProduct(false);
      }
      );
  }, [orderItem])

  const handleDeleteClicekButton = () => {
    setOrdersItems([]);
    deleteItemOrder(orderItem.id, orderItem.quantity, tokenSession)
      .then(() => {
        getActiveCart(tokenSession)
          .then(data => {
          if (!data) {
            return []
          }
                  dispatch(updateAllProducs({orderItemsArray: data}));

          setOrdersItems(data);
        });
      })
  };

  const handleClickDecreaseQuantityItem = () => {
    updateItemInOrder(orderItem.id, orderItem.quantity -1, tokenSession)
      .then(item => {
        getActiveCart(tokenSession)
          .then(data => {
          if (!data) {
            return []
          }
            dispatch(updateAllProducs({orderItemsArray: data}));

          setOrdersItems(data);
        });
        setOrderItem(item);
      })
  };

  const handleClickIncrementQuantityItem = () => {
    updateItemInOrder(orderItem.id, orderItem.quantity + 1, tokenSession)
      .then(item => {
        getActiveCart(tokenSession)
          .then(data => {
          if (!data) {
            return []
          }
            dispatch(updateAllProducs({orderItemsArray: data}));

          setOrdersItems(data);
        });
        
        setOrderItem(item);

      })
  };

  return (
    <StyledCartItem className="cart-item">
      {loadingProduct || 
      <>
        <div className="cart-item__top-content">
        <button
          type="button"
          className="cart-item__remove-btn"
          aria-label="remove item cart"
          onClick={handleDeleteClicekButton}
        >
          <Icon icon={IconType.CLOSE} border />
        </button>
        <img className="top-content__product-image" src={product?.image} alt={product?.name} />
        <span className="top-content__product-title">{product?.name}</span>
      </div>
      <div className="cart-item__bottom-content">
        <div className="bottom-content__wrapper">
          <button
            type="button"
            className="bottom-content__counter-btn"
            aria-label="decrease this item from cart"
            onClick={handleClickDecreaseQuantityItem}
            disabled={orderItem.quantity <= 1}
          >
            <Icon icon={IconType.MINUS} fill="black" />
          </button>
          <span className="bottom-content__quantity">{orderItem.quantity}</span>
          <button
            type="button"
            aria-label="add this item to cart"
            className="bottom-content__counter-btn"
            onClick={handleClickIncrementQuantityItem}
          >
            <Icon icon={IconType.PLUS} fill="black" />
          </button>
        </div>
        <span className="bottom-content__total-price">{`$${product?.priceDiscount}`}</span>
      </div>

      </>}
      
    </StyledCartItem>
  );
}

export default CartItem;
