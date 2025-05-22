import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 452px;
  height: 56px;
  padding: 6px 16px 8px 16px;
  margin: ${({ $margin }) => $margin || '0px'};
  border-width: 2px;
  border-radius: 8px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;

  @media (max-width: 430px) {
    max-width: 278px;
  }
`;

export const InputLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-top: 2px;
`;

export const InputText = styled.input`
  border: none;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-family: 'Avenir Next';

  &:focus {
    outline: none;
  }
`;
