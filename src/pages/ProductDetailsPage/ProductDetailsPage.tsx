/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.types.ts';
import StyledProductDetailsPage from './StyledProductDetailsPage.ts';
import { FullProduct } from '../../types/types.ts';
import { getProductByID } from '../../api/getAll.ts';
import { SkeletonContainer } from '../../components/Skeleton/StyledSkeleton.ts';

/*
  StyledBackHomeButton - Line 130 to 133 - probably will be a global component
*/

type Favorites = {
  id: string;
  isFavorite: boolean;
};

type Selected = {
  id: string;
  isSelected: boolean;
};

function ProductDetailsPage() {
  const [selectImg, SetSelectImg] = useState<string>('');
  const [product, SetProduct] = useState<FullProduct | null>(null);
  const [color, SetColor] = useState<string>('');
  const [capacity, SetCapacity] = useState<string>('');
  const [favorites, SetFavorites] = useState<Favorites[]>([]);
  const [selected, Setselected] = useState<Selected[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { categoryId } = useParams();
  const { category } = useParams();
  const navigate = useNavigate();

  function handleCategoryId(categoryID: string | undefined, element: FullProduct | null) {
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

  useEffect(() => {
    if (!product) {
      getProductByID(categoryId)
        .then(res => {
          SetProduct(res);
          SetCapacity(res.capacity);
          SetColor(res.color);
          SetSelectImg(res.images[0]);

          navigate(`/shop/${category}/${res.id}`, { replace: true });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [category, categoryId, navigate, product]);

  function handleSetColor(col: string) {
    SetSelectImg('');
    SetColor(col);

    getProductByID(
      `${handleCategoryId(categoryId, product)}-${capacity.toLowerCase()}-${col}`,
    ).then(res => {
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

    getProductByID(`${handleCategoryId(categoryId, product)}-${capac.toLowerCase()}-${color}`).then(
      res => {
        SetProduct(res);
        SetCapacity(res.capacity);
        SetColor(res.color);
        SetSelectImg(res.images[0]);

        navigate(`/shop/${category}/${res.id}`, { replace: true });
      },
    );
  }

  function handleFavorites(id: string | undefined): void {
    if (id) {
      SetFavorites(state => {
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

  return (
    <StyledProductDetailsPage className="product-details-page">
      <button type="button" className="product-details-page__back-home-btn">
        <Icon icon={IconType.ARROW_LEFT} />
        <span className="product-details-page__btn-description">Back</span>
      </button>

      <h1 className="product-details-page__title">{product?.name}</h1>

      {isLoading ? (
        <>
          <SkeletonContainer className="skeleton-container">
            <div className="skeleton skeleton-card-wrapper">
              <div className="skeleton skeleton-card-images">
                <div className="skeleton skeleton-card-bigImage" />
                <div className="skeleton skeleton-card-smallImage-wrapper">
                  <div className="skeleton skeleton-card-smallImage" />
                  <div className="skeleton skeleton-card-smallImage" />
                  <div className="skeleton skeleton-card-smallImage" />
                  <div className="skeleton skeleton-card-smallImage" />
                  <div className="skeleton skeleton-card-smallImage" />
                </div>
              </div>
              <div className="skeleton skeleton-card-detail">
                <div className="skeleton skeleton-card-detail--colors" />
                <div className="skeleton skeleton-card-detail--colors" />
                <div className="skeleton skeleton-card-detail--price" />
              </div>
            </div>
          </SkeletonContainer>
          <SkeletonContainer>
            <div className="skeleton skeleton-card-wrapper__details">
              <div className="skeleton skeleton-card-wrapper__details-about">
                <div className="skeleton skeleton-card-wrapper__details-about-title" />
                <div className="skeleton skeleton-card-wrapper__details-about-description" />
              </div>
              <div className="skeleton skeleton-card-wrapper__details-techSpechs">
                <div className="skeleton skeleton-card-wrapper__details-techSpechs-title" />
                <div className="skeleton skeleton-card-wrapper__details-techSpechs-description" />
              </div>
            </div>
          </SkeletonContainer>
        </>
      ) : (
        <>
          <section className="product-details-page__select-phone-grid">
            <article className="product-details-page__images">
              <img
                src={`../../${selectImg}`}
                alt="main-img"
                className="product-details-page__images-main"
              />

              <div className="product-details-page__images-minis">
                {product?.images.map(el => (
                  <div
                    key={el}
                    className={`product-details-page__images-minis-container ${el === selectImg ? 'product-details-page__images-minis-container--selected' : ''}`}
                    onClick={() => SetSelectImg(el)}
                  >
                    <img
                      src={`../../${el}`}
                      alt={`img ${el}`}
                      className="product-details-page__images-mini"
                    />
                  </div>
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
                  <span
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
                    <div
                      key={capacit}
                      className={`product-details-page__variants-capacity-memo-option ${capacity === capacit ? 'product-details-page__variants-capacity-memo-option--selected' : ''}`}
                      onClick={() => handlesSetCapacity(capacit)}
                    >
                      {capacit}
                    </div>
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
                    className={`product-details-page__variants-shopping-add-btn product-details-page__variants-shopping-add-cart ${selected.find(el => el.id === product?.id && el.isSelected) ? 'product-details-page__variants-shopping-add-cart--selected' : ''}`}
                    onClick={() => handleSelected(product?.id)}
                  >
                    {selected.find(el => el.id === product?.id && el.isSelected) ? (
                      <>Added to cart</>
                    ) : (
                      <>Add to cart</>
                    )}
                  </button>
                  <button
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
                <p className="product-details-page__details-techs-information-especifications">
                  RAM
                </p>
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
        </>
      )}
    </StyledProductDetailsPage>
  );
}

export default ProductDetailsPage;
