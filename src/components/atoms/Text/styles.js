import styled from 'styled-components';
import { theme } from 'styles';

export const Title = styled.h1.attrs((props) => ({
  as: props.as || 'h1',
}))`
  font-weight: ${({ $fontWeight }) => $fontWeight || 'bold'};
  font-size: ${({ $fontSize }) => $fontSize || 24}px;
  line-height: ${({ $lineHeight }) => $lineHeight || 22}px;
  text-align: ${({ $align }) => $align || 'center'};
  color: ${({ $color }) => $color || theme.colors.black};
  margin: ${({ $margin }) => $margin || 0}px;
  padding: ${({ $padding }) => $padding || 0}px;
  max-width: ${({ $mw }) => $mw || 350}px;

  @media (max-width: 430px) {
    font-size: ${({ $fontSizeMobile, $fontSize }) =>
      $fontSizeMobile || $fontSize || 18}px;
    line-height: ${({ $lineHeightMobile, $lineHeight }) =>
      $lineHeightMobile || $lineHeight || 20}px;
    max-width: ${({ $mwMobile, $mw }) => $mwMobile || $mw || 250}px;
    text-align: ${({ $alignMobile, $align }) =>
      $alignMobile || $align || 'center'};
    margin: ${({ $marginMobile, $margin }) => $marginMobile || $margin || 0}px;
    padding: ${({ $paddingMobile, $padding }) =>
      $paddingMobile || $padding || 0}px;
  }
`;

export const Subtitle = styled.p.attrs((props) => props)`
  max-width: ${({ $mw }) => $mw || 450}px;
  margin-top: ${({ $mt }) => $mt || 0}px;
  text-align: ${({ $align }) => $align || 'center'};

  @media (max-width: 430px) {
    max-width: ${({ $mwMobile, $mw }) => $mwMobile || $mw || 272}px;
    margin-bottom: ${({ $mbMobile }) => $mbMobile || 32}px;
    text-align: ${({ $alignMobile, $align }) =>
      $alignMobile || $align || 'center'};
  }
`;

export const SmallText = styled.span.attrs((props) => props)`
  font-size: ${({ $fontSize }) => $fontSize || 16}px;
  font-weight: ${({ $fontWeight }) => $fontWeight || 500};
  text-align: ${({ $align }) => $align || 'center'};

  color: ${({ $checked, $color, theme }) => {
    if ($color) return $color;
    return $checked ? '#8cae86' : theme.colors.black;
  }};

  margin: ${({ $margin }) => $margin || 0}px;
  padding: ${({ $padding }) => $padding || 0}px;

  @media (max-width: 430px) {
    font-size: ${({ $fontSizeMobile, $fontSize }) =>
      $fontSizeMobile || $fontSize || 14}px;

    font-weight: ${({ $fontWeightMobile, $fontWeight }) =>
      $fontWeightMobile || $fontWeight || 500};

    text-align: ${({ $alignMobile, $align }) =>
      $alignMobile || $align || 'center'};

    margin: ${({ $marginMobile, $margin }) => $marginMobile || $margin || 0}px;
    padding: ${({ $paddingMobile, $padding }) =>
      $paddingMobile || $padding || 0}px;
  }
`;
