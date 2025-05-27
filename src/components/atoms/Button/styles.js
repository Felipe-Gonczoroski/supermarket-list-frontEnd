import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

const sizeMap = {
  larger: { width: '452px', height: '48px' },
  lightLarger: { width: '452px', height: '48px' },
  large: { width: '452px', height: '42px' },
  medium: { width: '300px', height: '42px' },
  small: { width: '160px', height: '42px' },
};

const colorMap = {
  larger: {
    background: '#a8c3a0',
    color: '#ffffff',
    border: '#a8c3a0',
    hoverBg: '#9bb993',
    hoverBorder: '#9bb993',
  },

  lightLarger: {
    background: '#f0faf7',
    color: '#92b78e',
    border: '#a8c3a0',
    hoverBg: '#e2f4eb',
    hoverBorder: '#a8c3a0',
  },

  large: {
    background: '#a8c3a0',
    color: '#ffffff',
    border: '#a8c3a0',
    hoverBg: '#9bb993',
    hoverBorder: '#9bb993',
  },

  medium: {
    background: '#a8c3a0',
    color: '#ffffff',
    border: '#a8c3a0',
    hoverBg: '#9bb993',
    hoverBorder: '#9bb993',
  },

  small: {
    background: '#a8c3a0',
    color: '#ffffff',
    border: '#a8c3a0',
    hoverBg: '#9bb993',
    hoverBorder: '#9bb993',
  },
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${(props) =>
    props.variant === 'lightLarger' ? 'row-reverse' : 'row'};

  width: ${(props) => sizeMap[props.variant]?.width || '160px'};
  height: ${(props) => sizeMap[props.variant]?.height || '42px'};

  background-color: ${(props) =>
    colorMap[props.variant]?.background || '#a8c3a0'};

  color: ${(props) => colorMap[props.variant]?.color || '#ffffff'};

  border: 1px solid ${(props) => colorMap[props.variant]?.border || '#a8c3a0'};

  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'larger'
        ? '#9bb993'
        : props.variant === 'lightLarger'
          ? '#e2f4eb'
          : '#9bb993'};

    border-color: ${(props) =>
      props.variant === 'lightLarger' ? '#a8c3a0' : '#9bb993'};
  }

  img.button-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 6px;
    margin-top: 2px;
  }

  @media (max-width: ${breakpoints.xxl}) {
    width: ${(props) =>
      ['larger', 'lightLarger', 'large'].includes(props.variant)
        ? '455px'
        : props.variant === 'small'
          ? '110px'
          : '250px'};
    height: ${(props) => (props.variant === 'small' ? '34px' : '42px')};
  }

  @media (max-width: ${breakpoints.lg}) {
    width: ${(props) =>
      ['larger', 'lightLarger', 'large'].includes(props.variant)
        ? '430px'
        : props.variant === 'small'
          ? '120px'
          : '200px'};
  }

  @media (max-width: ${breakpoints.md}) {
    width: ${(props) =>
      ['larger', 'lightLarger', 'large'].includes(props.variant)
        ? '430px'
        : props.variant === 'small'
          ? '120px'
          : '200px'};
  }

  @media (max-width: ${breakpoints.sm}) {
    width: ${(props) =>
      ['larger', 'lightLarger', 'large'].includes(props.variant)
        ? '260px'
        : props.variant === 'small'
          ? '50px'
          : '180px'};

    height: ${(props) =>
      props.variant === 'larger' || props.variant === 'lightLarger'
        ? '48px'
        : '42px'};
  }
`;

export { StyledButton };
