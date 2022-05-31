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

export * from './modalStyles'
export * from './formStyles'
export * from './cardStyles'

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
  cursor: pointer;
  &:hover{
    background-color: ${ props => props.theme.colors.primaryLight};
  }
  &:active{
    background-color: ${ props => props.theme.colors.primaryDark};
  }

  &.outline {
    color: ${ props => props.theme.colors.textDefault};
    background-color: rgba(255, 255, 255, .8);
    border: 1px solid ${ props => props.theme.colors.borders};
    white-space: nowrap;
    transition: .3s all;
    &:hover{
      border-color: ${ props => props.theme.colors.primary};
      background-color: #fff;
    }
  }
  
  ${compose(
    layout,
    flexbox,
    space,
    position,
    border,
  )}
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 14rem;
`