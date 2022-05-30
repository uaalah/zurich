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
import { Box } from '.'

export const FormRow = styled.div`
  margin-bottom: ${props => props.theme.space[7 ]};
  label{
    display: block;
    font-weight: 500;
  }
  input,
  textarea{
    width: 100%;
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[5]};
    border-radius: ${props => props.theme.radii.m};
    border: 1px solid ${props => props.theme.colors.borders};
    font: ${props => props.theme.fontSizes.body}/1.3 ${props => props.theme.fonts.defaultStack};
    color: ${props => props.theme.colors.textDefault};
    &.error{
      border-color: #f00
    }
  }
  textarea {
    height: 6rem
  }
`