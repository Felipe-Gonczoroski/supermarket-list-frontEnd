import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 58px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${({ checked }) => (checked ? '#edf5ec' : 'white')};

  @media (max-width: 430px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 272px;
    height: auto;
    min-height: 58px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
    margin-bottom: 24px;
    padding: 12px;
    box-sizing: border-box;
  }
`;

export const Checkbox = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin: 0px 20px 2px 6px;

  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 0;
    cursor: pointer;
    z-index: 2;
  }

  input[type='checkbox']:checked + label {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  input[type='checkbox']:checked + label::after {
    opacity: 1;
  }

  @media (max-width: 430px) {
    width: 12px;
    height: 12px;
    margin: 0px 28px 14px 6px;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })``;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: white;
  cursor: pointer;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    width: 10px;
    height: 6px;
    border: 2px solid white;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
`;

export const ArrowIcon = styled.img`
  width: 12px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 430px) {
    width: 10px;
    height: 22px;
    object-fit: contain;
    cursor: pointer;
  }
`;
