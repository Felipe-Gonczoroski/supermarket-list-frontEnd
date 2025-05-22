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
  justify-content: flex-start;
  width: 1222px;
  height: 824px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3vw 6vw;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 700px;
    height: 824px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 3vw 6vw;
    overflow: hidden;
    box-sizing: border-box;
  }

  @media (max-width: 430px) {
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

  @media (max-width: 430px) {
    margin-top: 14px;
    margin-left: 12px;
  }
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;

  @media (max-width: 430px) {
    font-size: 12px;
    line-height: 16px;
    gap: 6px;
  }
`;

export const LogoImage = styled.img`
  width: 72px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 430px) {
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

  @media (max-width: 430px) {
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
