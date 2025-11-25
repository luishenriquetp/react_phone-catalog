import styled, { keyframes } from 'styled-components';

export const StyledSkeleton = keyframes`
  from {
    background: rgba(200, 200, 200, 0.1);
    border-color: rgba(200, 200, 200, 0.1);
  }
  to {
    background: rgba(200, 200, 200, 0.2);
    border-color: rgba(200, 200, 200, 0.2);
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  .skeleton {
    &.skeleton-select {
      width: 90%;
      height: 25px;
      border-radius: 4px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;
    }

    &.skeleton-card {
      width: 272px;
      height: 440px;
      padding: 1rem;
      border-radius: 8px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;

      &-select {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 136px;
        height: 40px;
        border-radius: 8px;
        background: rgba(200, 200, 200, 0.1);
        animation: ${StyledSkeleton} 1s infinite alternate;
      }

      &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px 0;
        width: 288px;
        margin: 20px;
        height: 620px;
        border-radius: 4px;
        background: rgba(200, 200, 200, 0.1);
        animation: ${StyledSkeleton} 1s infinite alternate;

        @media (min-width: 640px) and (max-width: 1199px) {
          width: 600px;
          height: 435px;
          margin: 50px;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        }

        @media (min-width: 1200px) {
          flex-direction: row;
          justify-content: space-around;
          align-items: flex-start;
          width: 1100px;
          height: 550px;
          margin: 50px;
        }

        &__details {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px;
          width: 288px;
          height: 700px;
          margin: 0 0 20px;
          border-radius: 8px;
          background: rgba(200, 200, 200, 0.1);
          animation: ${StyledSkeleton} 1s infinite alternate;

          @media (min-width: 640px) and (max-width: 1199px) {
            width: 600px;
            height: 435px;
            margin: 0 0 50px;
          }

          @media (min-width: 1200px) {
            width: 1036px;
            height: 435px;
            margin: 0 0 50px;
          }

          &-about {
            display: flex;
            flex-direction: column;
            gap: 20px;
            &-title {
              height: 40px;
              width: 150px;
              border-radius: 4px;
              background: rgba(200, 200, 200, 0.1);
              animation: ${StyledSkeleton} 1s infinite alternate;
            }

            &-description {
              height: 600px;
              width: 250px;
              border-radius: 4px;
              background: rgba(200, 200, 200, 0.1);
              animation: ${StyledSkeleton} 1s infinite alternate;

              @media (min-width: 640px) and (max-width: 1199px) {
                width: 550px;
                height: 330px;
              }

              @media (min-width: 1200px) {
                width: 990px;
                height: 330px;
              }
            }
          }
        }
      }

      &-images {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        margin: 10px;

        @media (min-width: 640px) and (max-width: 1199px) {
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-start;
          justify-content: space-evenly;
          gap: 10px;
          margin: 20px;
        }

        @media (min-width: 1200px) {
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-start;
          justify-content: space-evenly;
          gap: 10px;
          margin: 40px;
        }
      }

      &-bigImage {
        width: 240px;
        height: 265px;
        border-radius: 4px;
        background: rgba(200, 200, 200, 0.1);
        animation: ${StyledSkeleton} 1s infinite alternate;

        @media (min-width: 1200px) {
          width: 464px;
          height: 464px;
        }
      }

      &-smallImage-wrapper {
        display: flex;
        gap: 5px;

        @media (min-width: 640px) and (max-width: 1199px) {
          flex-direction: column;
        }

        @media (min-width: 1200px) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-evenly;
          gap: 16px;
        }
      }

      &-smallImage {
        width: 49px;
        height: 49px;
        border-radius: 4px;
        background: rgba(200, 200, 200, 0.1);
        animation: ${StyledSkeleton} 1s infinite alternate;

        @media (min-width: 1200px) {
          width: 80px;
          height: 80px;
        }
      }

      &-detail {
        height: 435px;
        display: flex;
        flex-direction: column;

        @media (min-width: 640px) and (max-width: 1199px) {
          margin: 20px 20px 0;
        }

        @media (min-width: 1200px) {
          margin: 40px;
          height: 460px;
        }

        &--colors {
          width: 240px;
          height: 50px;
          margin-bottom: 1rem;
          border-radius: 4px;
          background: rgba(200, 200, 200, 0.1);
          animation: ${StyledSkeleton} 1s infinite alternate;
        }

        &--price {
          width: 240px;
          height: 100px;
          margin-bottom: 1rem;
          border-radius: 4px;
          background: rgba(200, 200, 200, 0.1);
          animation: ${StyledSkeleton} 1s infinite alternate;

          @media (min-width: 640px) and (max-width: 1199px) {
            height: 250px;
            justify-content: center;
          }

          @media (min-width: 1200px) {
            height: 350px;
            margin: 0;
          }
        }
      }
    }

    &.skeleton-image {
      width: 100%;
      height: 200px;
      margin-bottom: 1rem;
      border-radius: 4px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;
    }

    &.skeleton-title {
      width: 100%;
      height: 100px;
      margin-bottom: 1rem;
      border-radius: 4px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;
    }

    &.skeleton-button {
      width: 100%;
      height: 60px;
      border-radius: 4px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;
    }

    &.skeleton-cart {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 288px;
      height: 160px;
      margin: 0;
      padding: 1rem;
      border-radius: 8px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;

      @media (min-width: 640px) and (max-width: 1199px) {
        width: 592px;
        height: 128px;
        flex-direction: row;
      }

      @media (min-width: 1200px) {
        width: 752px;
        height: 128px;
        flex-direction: row;
        justify-content: space-around;
      }

      &-items {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 30px;
      }

      &-top {
        display: flex;
        justify-content: space-around;

        @media (min-width: 640px) and (max-width: 1199px) {
          width: 592px;
          height: 128px;
          justify-content: space-evenly;
          align-items: center;
        }

        @media (min-width: 1200px) {
          width: 420px;
          height: 128px;
          justify-content: space-evenly;
          align-items: center;
        }
      }

      &-bottom {
        display: flex;
        justify-content: space-around;
        width: 200px;
        height: 20px;

        @media (min-width: 640px) and (max-width: 1199px) {
          width: 592px;
          height: 128px;
          justify-content: space-evenly;
          align-items: center;
        }

        @media (min-width: 1200px) {
          width: 228px;
          height: 128px;
          justify-content: space-evenly;
          align-items: center;
        }
      }

      &-checkout {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 288px;
        height: 190px;
        margin: 0 0 32px;
        padding: 1rem;
        border-radius: 8px;
        background: rgba(200, 200, 200, 0.1);
        animation: ${StyledSkeleton} 1s infinite alternate;

        @media (min-width: 640px) and (max-width: 1199px) {
          width: 592px;
          height: 190px;
          justify-content: space-evenly;
          align-items: center;
        }

        &-title {
          width: 90%;
          height: 62px;
          border-radius: 4px;
          background: rgba(200, 200, 200, 0.1);
          animation: ${StyledSkeleton} 1s infinite alternate;
        }

        &-amount {
          width: 90%;
          height: 48px;
          border-radius: 16px;
          background: rgba(200, 200, 200, 0.1);
          animation: ${StyledSkeleton} 1s infinite alternate;
        }
      }
    }

    &-img {
      width: 66px;
      height: 66px;
      margin-bottom: 1rem;
      border-radius: 4px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;
      margin: 0;

      @media (min-width: 1200px) {
        width: 80px;
        height: 80px;
      }
    }

    &-title {
      width: 128px;
      height: 65px;
      border-radius: 4px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;

      @media (min-width: 640px) and (max-width: 1199px) {
        width: 176px;
        height: 42px;
        justify-content: space-evenly;
      }

      @media (min-width: 1200px) {
        width: 200px;
        height: 50px;
        justify-content: space-evenly;
        align-items: center;
      }
    }

    &-buttons {
      width: 90%;
      height: 30px;
      border-radius: 4px;
      background: rgba(200, 200, 200, 0.1);
      animation: ${StyledSkeleton} 1s infinite alternate;

      @media (min-width: 640px) and (max-width: 1199px) {
        width: 35%;
        height: 42px;
      }

      @media (min-width: 1200px) {
        width: 40%;
        height: 50px;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
`;
