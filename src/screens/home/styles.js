import styled from 'styled-components';

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
  background-color: #ffffff;

  @media (max-width: 430px) {
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
  height: 220px;

  @media (max-width: 430px) {
    width: 170px;
    height: 170px;
  }
`;
