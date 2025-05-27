import styled from 'styled-components';
import { theme } from 'styles';
import { breakpoints } from 'styles/breakpoints';

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

  @media (max-width: ${breakpoints.xxl}) {
    font-size: ${({ $fontSizeXXL, $fontSize }) =>
      $fontSizeXXL || $fontSize || 20}px;
    line-height: ${({ $lineHeightXXL, $lineHeight }) =>
      $lineHeightXXL || $lineHeight || 28}px;
    max-width: ${({ $mwXXL, $mw }) => $mwXXL || $mw || 275}px;
    text-align: ${({ $alignXXL, $align }) => $alignXXL || $align || 'center'};
    margin: ${({ $marginXXL, $margin }) => $marginXXL || $margin || 0}px;
    padding: ${({ $paddingXXL, $padding }) => $paddingXXL || $padding || 0}px;
  }

  @media (max-width: ${breakpoints.xl}) {
    font-size: ${({ $fontSizeXL, $fontSize }) =>
      $fontSizeXL || $fontSize || 20}px;
    line-height: ${({ $lineHeightXL, $lineHeight }) =>
      $lineHeightXL || $lineHeight || 28}px;
    max-width: ${({ $mwXL, $mw }) => $mwXL || $mw || 275}px;
    text-align: ${({ $alignXL, $align }) => $alignXL || $align || 'center'};
    margin: ${({ $marginXL, $margin }) => $marginXL || $margin || 0}px;
    padding: ${({ $paddingXL, $padding }) => $paddingXL || $padding || 0}px;
  }

  @media (max-width: ${breakpoints.lg}) {
    font-size: ${({ $fontSizeLG, $fontSize }) =>
      $fontSizeLG || $fontSize || 20}px;
    line-height: ${({ $lineHeightLG, $lineHeight }) =>
      $lineHeightLG || $lineHeight || 22}px;
    max-width: ${({ $mwLG, $mw }) => $mwLG || $mw || 300}px;
    text-align: ${({ $alignLG, $align }) => $alignLG || $align || 'center'};
    margin: ${({ $marginLG, $margin }) => $marginLG || $margin || 0}px;
    padding: ${({ $paddingLG, $padding }) => $paddingLG || $padding || 0}px;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${({ $fontSizeSM, $fontSize }) =>
      $fontSizeSM || $fontSize || 18}px;
    line-height: ${({ $lineHeightSM, $lineHeight }) =>
      $lineHeightSM || $lineHeight || 20}px;
    max-width: ${({ $mwSM, $mw }) => $mwSM || $mw || 250}px;
    text-align: ${({ $alignSM, $align }) => $alignSM || $align || 'center'};
    margin: ${({ $marginSM, $margin }) => $marginSM || $margin || 0}px;
    padding: ${({ $paddingSM, $padding }) => $paddingSM || $padding || 0}px;
  }
`;

export const Subtitle = styled.p.attrs((props) => props)`
  max-width: ${({ $mw }) => $mw || 450}px;
  margin-top: ${({ $mt }) => $mt || 0}px;
  text-align: ${({ $align }) => $align || 'center'};

  @media (max-width: ${breakpoints.xl}) {
    max-width: ${({ $mwXL, $mw }) => $mwXL || $mw || 300}px;
    margin-bottom: ${({ $mbXL }) => $mbXL || 0}px;
    text-align: ${({ $alignXL, $align }) => $alignXL || $align || 'center'};
    font-size: ${({ $fontSizeXL, $fontSize }) =>
      $fontSizeXL || $fontSize || 14}px;
  }

  @media (max-width: ${breakpoints.lg}) {
    max-width: ${({ $mwLG, $mw }) => $mwLG || $mw || 272}px;
    margin-bottom: ${({ $mbLG }) => $mbLG || 0}px;
    text-align: ${({ $alignLG, $align }) => $alignLG || $align || 'center'};
    font-size: ${({ $fontSizeLG, $fontSize }) =>
      $fontSizeLG || $fontSize || 14}px;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: ${({ $mwSM, $mw }) => $mwSM || $mw || 272}px;
    margin-bottom: ${({ $mbSM }) => $mbSM || 32}px;
    text-align: ${({ $alignSM, $align }) => $alignSM || $align || 'center'};
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

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${({ $fontSizeSM, $fontSize }) =>
      $fontSizeSM || $fontSize || 14}px;

    font-weight: ${({ $fontWeightSM, $fontWeight }) =>
      $fontWeightSM || $fontWeight || 500};

    text-align: ${({ $alignSM, $align }) => $alignSM || $align || 'center'};

    margin: ${({ $marginSM, $margin }) => $marginSM || $margin || 0}px;
    padding: ${({ $paddingSM, $padding }) => $paddingSM || $padding || 0}px;
  }
`;
