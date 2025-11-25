import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.ts';
import StyledProductDetailsPage from './StyledProductDetailsPage.ts';
import { addFavorite, deleteFavorite, getProductByID } from '../../api/getAll.ts';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import { useAppDispatch, useAppSelector } from '../../context/hooks.ts';
import { addProduct } from '../../context/cartContext/cartSlice.ts';
import { addFavourite, removeFavourite } from '../../context/favoriteContext/favouriteSlice.ts';
import ProductSlider from '../../components/ProductSlider/ProductSlider.tsx';
import { Product } from '../../types/types.ts';

type Selected = {
  id: string;
  isSelected: boolean;
};

function ProductDetailsPage(): React.ReactNode {
  const [selectImg, SetSelectImg] = useState<string | undefined>('');
  const [product, SetProduct] = useState<Product | null>(null);
  const [color, SetColor] = useState<string | undefined>('');
  const [capacity, SetCapacity] = useState<string | undefined>('');
  const favorites = useAppSelector(state => state.favourites.products);
  const [selected, Setselected] = useState<Selected[]>([]);
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();
  const { category } = useParams();

  const tokenSession = useAppSelector(state => state.user.tokenSession);

  const navigate = useNavigate();

  function handleCategoryId(categoryID?: string, element?: Product | null) {
    const splitedCategory = categoryID?.split('-');

    if (splitedCategory && element) {
      const indexOfCapacity = splitedCategory.indexOf(element.capacity.toLowerCase());

      const numberToDelete = splitedCategory.length - indexOfCapacity;

      for (let i = 0; i < numberToDelete; i += 1) {
        splitedCategory.pop();
      }

      const joinCategoryId = splitedCategory.join('-');

      return joinCategoryId;
    }

    return '';
  }

  function handleSetColor(col: string) {
    SetSelectImg('');
    SetColor(col);

    if (!capacity) {
      return;
    }

    const newId = `${handleCategoryId(categoryId, product)}-${capacity.toLowerCase()}-${col}`;

    getProductByID(newId).then(res => {
      SetProduct(res);
      SetCapacity(res.capacity);
      SetColor(res.color);
      SetSelectImg(res.images[0]);

      navigate(`/shop/${category}/${res.id}`, { replace: true });
    });
  }

  function handlesSetCapacity(capac: string): void {
    SetSelectImg('');
    SetCapacity(capac);

    const newId = `${handleCategoryId(categoryId, product)}-${capac.toLowerCase()}-${color}`;

    getProductByID(newId).then(res => {
      SetProduct(res);
      SetCapacity(res.capacity);
      SetColor(res.color);
      SetSelectImg(res.images[0]);

      navigate(`/shop/${category}/${res.id}`, { replace: true });
    });
  }

  function handleFavorites(id: string | undefined): void {
    if (id) {
        if (favorites.some(e => e.id === id)) {
          deleteFavorite(product!.id, tokenSession).then(() => {
            dispatch(removeFavourite(product!));
          });
        } else {
          addFavorite(product!.id, tokenSession).then(() => {
            dispatch(addFavourite(product!));
          });
        }
    }
  }

  function handleSelected(id: string | undefined): void {
    dispatch(addProduct(product!));
    if (id) {
      Setselected(state => {
        const itemIndex = state.findIndex(el => el.id === id);

        if (itemIndex !== -1) {
          return state.map((item, index) =>
            index === itemIndex ? { ...item, isSelected: !item.isSelected } : item,
          );
        }
        return [...state, { id, isSelected: true }];
      });
    }
  }

  useEffect(() => {
    getProductByID(categoryId).then(res => {
      SetProduct(res);
      SetCapacity(res.capacity);
      SetColor(res.color);
      SetSelectImg(res.images[0]);

      navigate(`/shop/${category}/${res.id}`, { replace: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, categoryId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!product) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <StyledProductDetailsPage className="product-details-page">
        <Breadcrumb />
        <h1 className="product-details-page__title">{product?.name}</h1>

        <section className="product-details-page__select-phone-grid">
          <article className="product-details-page__images">
            <img
              src={`../../${selectImg}`}
              alt="main-img"
              className="product-details-page__images-main"
            />

            <div className="product-details-page__images-minis">
              {product?.images.map(el => (
                <button
                  type="button"
                  aria-label="update(atualizar)"
                  key={el}
                  className={`product-details-page__images-minis-container ${el === selectImg ? 'product-details-page__images-minis-container--selected' : ''}`}
                  onClick={() => SetSelectImg(el)}
                >
                  <img
                    src={`../../${el}`}
                    alt={`img ${el}`}
                    className="product-details-page__images-mini"
                  />
                </button>
              ))}
            </div>
          </article>

          <article className="product-details-page__variants">
            <div className="product-details-page__variants-head-colors">
              <p className="product-details-page__variants-head-colors-title">Available colors</p>
              <p className="product-details-page__variants-head-colors-id">ID: 802390</p>
            </div>

            <div className="product-details-page__variants-colors">
              {product?.colorsAvailable.map(col => (
                <button
                  type="button"
                  aria-label="Atualizar"
                  key={col}
                  className={`product-details-page__variants-color product-details-page__variants-color--${col} ${col === color ? 'product-details-page__variants-color--selected' : ''}`}
                  onClick={() => handleSetColor(col)}
                />
              ))}
            </div>

            <div className="product-details-page__variants-capacity">
              <p className="product-details-page__variants-capacity-title">Select capacity</p>
              <div className="product-details-page__variants-capacity-memo">
                {product?.capacityAvailable.map(capacit => (
                  <button
                    type="button"
                    aria-label="atualizar"
                    key={capacit}
                    className={`product-details-page__variants-capacity-memo-option ${capacity === capacit ? 'product-details-page__variants-capacity-memo-option--selected' : ''}`}
                    onClick={() => handlesSetCapacity(capacit)}
                  >
                    {capacit}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-details-page__variants-shopping">
              <div className="product-details-page__variants-shopping-price">
                <p className="product-details-page__variants-shopping-price-new">
                  {product?.priceDiscount}
                </p>
                <p className="product-details-page__variants-shopping-price-old">
                  {product?.priceRegular}
                </p>
              </div>

              <div className="product-details-page__variants-shopping-add">
                <button
                  type="button"
                  aria-label="atualizar"
                  className={`product-details-page__variants-shopping-add-btn product-details-page__variants-shopping-add-cart ${selected.find(el => el.id === product?.id && el.isSelected) ? 'product-details-page__variants-shopping-add-cart--selected' : ''}`}
                  onClick={() => handleSelected(product?.id)}
                  disabled={selected[0]?.isSelected}
                >
                  {selected.find(el => el.id === product?.id && el.isSelected) ? (
                    <>Added to cart</>
                  ) : (
                    <>Add to cart</>
                  )}
                </button>
                <button
                  type="button"
                  aria-label="atualizar"
                  className="product-details-page__variants-shopping-add-btn product-details-page__variants-shopping-add-favorite"
                  onClick={() => handleFavorites(product?.id)}
                >
                  {favorites.some(el => el.id === product.id) ? (
                    <Icon icon={IconType.FILLED_HEARTLIKE} fill="#F4BA47" />
                  ) : (
                    <Icon icon={IconType.EMPTY_HEARTLIKE} fill="#0F0F11" />
                  )}
                </button>
              </div>
            </div>

            <div className="product-details-page__variants-informations">
              <div className="product-details-page__variants-informations-card">
                <p className="product-details-page__variants-informations-card-especification">
                  Screen
                </p>
                <p className="product-details-page__variants-informations-card-value">
                  {product?.screen}
                </p>
              </div>
              <div className="product-details-page__variants-informations-card">
                <p className="product-details-page__variants-informations-card-especification">
                  Resolution
                </p>
                <p className="product-details-page__variants-informations-card-value">
                  {product?.resolution}
                </p>
              </div>
              <div className="product-details-page__variants-informations-card">
                <p className="product-details-page__variants-informations-card-especification">
                  Processor
                </p>
                <p className="product-details-page__variants-informations-card-value">
                  {product?.processor}
                </p>
              </div>
              <div className="product-details-page__variants-informations-card">
                <p className="product-details-page__variants-informations-card-especification">
                  RAM
                </p>
                <p className="product-details-page__variants-informations-card-value">
                  {product?.ram}
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="product-details-page__details">
          <article className="product-details-page__details-about">
            <h3 className="product-details-page__details-about-title">About</h3>
            <div className="product-details-page__details-about-contents">
              {product?.description?.map(desc => (
                <div key={desc.title} className="product-details-page__details-about-content">
                  <h4 className="product-details-page__details-about-header">{desc.title}</h4>
                  {desc.text.map(txt => (
                    <p key={txt} className="product-details-page__details-about-description">
                      {txt}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </article>
          <article className="product-details-page__details-techs">
            <h3 className="product-details-page__details-techs-title">Tech specs</h3>
            <div className="product-details-page__details-techs-information">
              <p className="product-details-page__details-techs-information-especifications">
                Screen
              </p>
              <p className="product-details-page__details-techs-information-value">
                {product?.screen}
              </p>
            </div>
            <div className="product-details-page__details-techs-information">
              <p className="product-details-page__details-techs-information-especifications">
                Resolution
              </p>
              <p className="product-details-page__details-techs-information-value">
                {product?.resolution}
              </p>
            </div>
            <div className="product-details-page__details-techs-information">
              <p className="product-details-page__details-techs-information-especifications">
                Processor
              </p>
              <p className="product-details-page__details-techs-information-value">
                {product?.processor}
              </p>
            </div>
            <div className="product-details-page__details-techs-information">
              <p className="product-details-page__details-techs-information-especifications">RAM</p>
              <p className="product-details-page__details-techs-information-value">
                {product?.ram}
              </p>
            </div>
            <div className="product-details-page__details-techs-information">
              <p className="product-details-page__details-techs-information-especifications">
                Built in memory
              </p>
              <p className="product-details-page__details-techs-information-value">
                {product?.capacity}
              </p>
            </div>
            {product?.camera && (
              <div className="product-details-page__details-techs-information">
                <p className="product-details-page__details-techs-information-especifications">
                  Camera
                </p>
                <p className="product-details-page__details-techs-information-value">
                  {product?.camera}
                </p>
              </div>
            )}

            {product?.zoom && (
              <div className="product-details-page__details-techs-information">
                <p className="product-details-page__details-techs-information-especifications">
                  Zoom
                </p>
                <p className="product-details-page__details-techs-information-value">
                  {product?.zoom}
                </p>
              </div>
            )}

            <div className="product-details-page__details-techs-information">
              <p className="product-details-page__details-techs-information-especifications">
                Cell
              </p>
              <p className="product-details-page__details-techs-information-value">
                {product?.cell.join(', ')}
              </p>
            </div>
          </article>
        </section>
      </StyledProductDetailsPage>

      
    </>
  );
}
export default ProductDetailsPage;