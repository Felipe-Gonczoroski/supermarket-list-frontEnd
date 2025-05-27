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
  justify-content: flex-start;
  width: 1222px;
  height: 824px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3vw 6vw;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.xxl}) {
    width: 856px;
    height: 538px;
  }

  @media (max-width: ${breakpoints.xl}) {
    width: 856px;
    height: 658px;
  }

  @media (max-width: ${breakpoints.lg}) {
    max-width: 700px;
    height: 824px;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 656px;
    height: 894px;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 338px;
    max-height: 624px;
  }
`;

export const ScreenHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  margin-left: 12px;
  width: 100%;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 14px;
    margin-left: 12px;
  }
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 14px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 12px;
    line-height: 16px;
    gap: 6px;
  }
`;

export const LogoImage = styled.img`
  width: 72px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${breakpoints.xxl}) {
    width: 66px;
    height: 66px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 46px;
    height: 46px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
