import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.ts';
import StyledProductDetailsPage from './StyledProductDetailsPage.ts';
import { FullProduct } from '../../types/types.ts';
import { getProducts } from '../../api/getAll.ts';
import phonesJson from '../../../public/api/phones.json';
import tabletJson from '../../../public/api/tablets.json';
import accessoriesJson from '../../../public/api/accessories.json';
import products from '../../../public/api/products.json';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import { useAppDispatch } from '../../context/hooks.ts';
import { addProduct } from '../../context/cartContext/cartSlice.ts';
import { addFavourite, removeFavourite } from '../../context/favoriteContext/favouriteSlice.ts';
import ProductSlider from '../../components/ProductSlider/ProductSlider.tsx';

/*
  StyledBackHomeButton - Line 130 to 133 - probably will be a global component
*/

function checkCategoryProduct(category: string, itemId: string) {
  if (category === 'phones') {
    return phonesJson.find(phone => phone.id === itemId) || null;
  }
  if (category === 'accessories') {
    return accessoriesJson.find(accessorie => accessorie.id === itemId) || null;
  }
  if (category === 'tablets') {
    return tabletJson.find(tablet => tablet.id === itemId) || null;
  }
  return null;
}

const fullProducts = products.map(el => ({
  ...el,
  product: checkCategoryProduct(el.category, el.itemId),
}));

type Favorites = {
  id: string;
  isFavorite: boolean;
};

type Selected = {
  id: string;
  isSelected: boolean;
};

function testGetProductsByID(id: string | undefined) {
  return fullProducts.find(prodct => prodct.itemId === id)?.product || null;
}

function ProductDetailsPage() {
  const [selectImg, SetSelectImg] = useState<string | undefined>('');
  const [product, SetProduct] = useState<FullProduct | null | undefined>(null);
  const [color, SetColor] = useState<string | undefined>('');
  const [capacity, SetCapacity] = useState<string | undefined>('');
  const [favorites, SetFavorites] = useState<Favorites[]>([]);
  const [selected, Setselected] = useState<Selected[]>([]);
  const dispatch = useAppDispatch();

  const { categoryId } = useParams();
  const { category } = useParams();
  const navigate = useNavigate();

  function handleCategoryId(
    categoryID: string | undefined,
    element: FullProduct | null | undefined,
  ) {
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

    // getProductByID(
    //   `${handleCategoryId(categoryId, product)}-${capacity.toLowerCase()}-${col}`,
    // ).then(res => {
    //   SetProduct(res);
    //   SetCapacity(res.capacity);
    //   SetColor(res.color);
    //   SetSelectImg(res.images[0]);

    //   navigate(`/shop/${category}/${res.id}`, { replace: true });
    // });

    SetProduct(testGetProductsByID(newId));
    SetCapacity(testGetProductsByID(newId)?.capacity);
    SetColor(testGetProductsByID(newId)?.color);
    SetSelectImg(testGetProductsByID(newId)?.images[0]);

    navigate(`/shop/${category}/${testGetProductsByID(newId)?.id}`, {
      replace: true,
    });
  }

  function handlesSetCapacity(capac: string): void {
    SetSelectImg('');
    SetCapacity(capac);

    const newId = `${handleCategoryId(categoryId, product)}-${capac.toLowerCase()}-${color}`;

    // getProductByID(`${handleCategoryId(categoryId, product)}-${capac.toLowerCase()}-${color}`).then(
    //   res => {
    //     SetProduct(res);
    //     SetCapacity(res.capacity);
    //     SetColor(res.color);
    //     SetSelectImg(res.images[0]);

    //     navigate(`/shop/${category}/${res.id}`, { replace: true });
    //   },
    // );

    SetProduct(testGetProductsByID(newId));
    SetCapacity(testGetProductsByID(newId)?.capacity);
    SetColor(testGetProductsByID(newId)?.color);
    SetSelectImg(testGetProductsByID(newId)?.images[0]);

    navigate(`/shop/${category}/${testGetProductsByID(newId)?.id}`, {
      replace: true,
    });
  }

  function handleFavorites(id: string | undefined): void {
    if (id) {
      SetFavorites(state => {
        if (!state[0]?.isFavorite) {
          dispatch(addFavourite(products.find(e => e.itemId === id)!));
        } else {
          dispatch(removeFavourite(products.find(e => e.itemId === id)!));
        }
        const itemIndex = state.findIndex(el => el.id === id);

        if (itemIndex !== -1) {
          return state.map((item, index) =>
            index === itemIndex ? { ...item, isFavorite: !item.isFavorite } : item,
          );
        }
        return [...state, { id, isFavorite: true }];
      });
    }
  }

  function handleSelected(id: string | undefined): void {
    dispatch(addProduct(products.find(e => e.itemId === id)!));
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
    if (!product) {
      //   getProductByID(categoryId).then(res => {
      //     SetProduct(res);
      //     SetCapacity(res.capacity);
      //     SetColor(res.color);
      //     SetSelectImg(res.images[0]);

      //     navigate(`/shop/${category}/${res.id}`, { replace: true });
      //   });
      // }
      const res = testGetProductsByID(categoryId);
      if (res) {
        SetProduct(res);
        SetCapacity(res?.capacity);
        SetColor(res?.color);
        SetSelectImg(res?.images[0]);

        navigate(`/shop/${category}/${res?.id}`, {
          replace: true,
        });
      }
    }
  }, [category, categoryId, navigate, product]);

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
                  {favorites.find(el => el.id === product?.id && el.isFavorite) ? (
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
      <ProductSlider title="You may also like!" getProducts={getProducts} />
    </>
  );
}

export default ProductDetailsPage;
