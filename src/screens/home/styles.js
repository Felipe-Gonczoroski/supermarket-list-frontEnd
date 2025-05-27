import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 720px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${breakpoints.xxl}) {
    width: 528px;
    height: 582px;
  }

  @media (max-width: ${breakpoints.xl}) {
    width: 492px;
    height: 600px;
    padding: 12px;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 480px;
    height: 526px;
    padding: 18px;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 300px;
    max-height: 600px;
    padding: 12px;
  }
`;

export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'Sacola de compras',
})`
  width: 220px;
  height: auto;

  @media (max-width: ${breakpoints.xxl}) {
    width: 200px;
    height: auto;
  }

  @media (max-width: ${breakpoints.xl}) {
    width: 170px;
    height: auto;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 180px;
    height: auto;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 170px;
    height: auto;
  }
`;
