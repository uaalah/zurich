import styled from 'styled-components'
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  position,
  PositionProps,
  compose,
} from 'styled-system'

export * from './modalStyles';

type GenericProps = FlexboxProps & LayoutProps & ColorProps & TypographyProps & SpaceProps & BorderProps & ShadowProps & PositionProps;
type TextProps = SpaceProps & ColorProps & TypographyProps & LayoutProps & PositionProps;
/*interface TextProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps, PositionProps{
  textStyle: string
}*/
type ButtonProps = FlexboxProps & LayoutProps &  SpaceProps & PositionProps & BorderProps;

export const Box = styled.div<GenericProps>`
  ${compose(
    layout,
    flexbox,
    space,
    color,
    typography,
    border,
    shadow,
    position
  )}
`

export const Text = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  &.pageHeader {
    font-size: ${ (props) => props.theme.fontSizes.header};
    font-weight: 600;
    line-height: 1
  }
  &.modalHeader {
    font-size: ${ (props) => props.theme.fontSizes.modalHeader};
    font-weight: 600;
    line-height: 1;
  }
  &.input {
    font-family: ${ (props) => props.theme.fontSizes.defaultStack};
    font-size: ${ (props) => props.theme.fontSizes.body};
    line-height: 1;
  }
  &.button {
    font-family: ${ (props) => props.theme.fontSizes.defaultStack};
    font-size: ${ (props) => props.theme.fontSizes.body};
    font-weight: 600;
    line-height: 1;
  }
  &.cardHeader {
    font-size: ${ (props) => props.theme.fontSizes.cardHeader};
    font-weight: 600;
    line-height: 1;
  }
  &.body{
    font-size: ${ (props) => props.theme.fontSizes.body},;
    line-height: 1.3;
  }
  ${compose(
    space,
    color,
    typography,
    layout,
    position,
  )}
`

export const ButtonDisplay = styled.button<ButtonProps>`
  border: 0 none;
  background-color: ${ props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: ${ props => props.theme.colors.primaryLight};
    cursor: pointer;
  }
  &:active{
    background-color: ${ props => props.theme.colors.primaryDark};
    cursor: pointer;
  }
  
  ${compose(
    layout,
    flexbox,
    space,
    position,
    border,
  )}
`