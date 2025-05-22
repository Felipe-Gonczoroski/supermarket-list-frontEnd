import styled from 'styled-components';

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

const getResponsiveMaxWidth = (variant, isMobile, isTablet) => {
  if (isMobile) {
    if (['larger', 'lightLarger', 'large'].includes(variant)) return '348px';
    if (variant === 'small') return '44px';
    return '200px';
  }

  if (isTablet) {
    if (['larger', 'lightLarger'].includes(variant)) return '452px';
    if (variant === 'small') return '160px';
    if (variant === 'large') return '452px';
    return '300px';
  }

  return sizeMap[variant]?.width || '300px';
};

const getResponsiveHeight = (variant, isMobile, isTablet) => {
  if (isMobile) {
    if (['larger', 'lightLarger'].includes(variant)) return '48px';
    if (['large', 'small'].includes(variant)) return '42px';
    return '42px';
  }

  if (isTablet) {
    if (['larger', 'lightLarger'].includes(variant)) return '48px';
    if (variant === 'small') return '42px';
    if (variant === 'large') return '42px';
    return '42px';
  }

  return sizeMap[variant]?.height || '42px';
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

  @media (max-width: 830px) {
    max-width: ${(props) => getResponsiveMaxWidth(props.variant, false, true)};
    height: ${(props) => getResponsiveHeight(props.variant, false, true)};
  }

  @media (max-width: 430px) {
    max-width: ${(props) => getResponsiveMaxWidth(props.variant, true, false)};
    height: ${(props) => getResponsiveHeight(props.variant, true, false)};
  }
`;

export { StyledButton };
