import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const ModalBackgroundContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 26vw;
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: 18px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.xxl}) {
    width: 36vw;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 65vw;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100vw;
    height: 100vh;
    padding-bottom: 18px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 1%;
  width: 96%;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 6px;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }

  @media (max-width: ${breakpoints.sm}) {
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url('/images/close.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: ${breakpoints.sm}) {
    top: 40%;
    right: 3%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ mode }) =>
    mode === 'edit' ? 'center' : 'space-between'};
  align-items: ${({ mode }) => (mode === 'edit' ? 'center' : 'stretch')};
  gap: ${({ mode }) => (mode === 'edit' ? '22px' : '26px')};
  margin-top: ${({ mode }) => (mode === 'edit' ? '528px' : '598px')};

  @media (max-width: ${breakpoints.xxl}) {
    gap: ${({ mode }) => (mode === 'edit' ? '24px' : '0px')};
    margin-top: ${({ mode }) => (mode === 'edit' ? '40vh' : '52vh')};
  }

  @media (max-width: ${breakpoints.md}) {
    gap: ${({ mode }) => (mode === 'edit' ? '24px' : '0px')};
    margin-top: ${({ mode }) => (mode === 'edit' ? '58vh' : '64vh')};
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: ${({ mode }) => (mode === 'edit' ? '22px' : '0px')};
    margin-top: ${({ mode }) => (mode === 'edit' ? '42vh' : '53vh')};
  }
`;
