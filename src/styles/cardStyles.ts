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

export const CardDisplay = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 30%);
  padding-bottom: 6.5rem;
  overflow: hidden;
  & .card{
    &--header{
      position: relative;
      .cardHeader{
        position: absolute;
        z-index: 3;
        bottom: ${ props => props.theme.space[7]};
        left: ${ props => props.theme.space[7]};
        color: ${props => props.theme.colors.white};
        text-shadow:  0 0 .7rem rgb(0 0 0 / 90%);
        transition: all .5s;
      }
      img{
        display: block;
      }
    }
    &--content{
      position: absolute;
      z-index: 2;
      bottom: 0;
      font-size: .875rem;
      padding: ${ props => props.theme.space[7]};
      background-color: ${props => props.theme.colors.white};
      height: 6.5rem;
      transition: all .5s;
      &--text{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  &:hover{
    cursor: pointer;
    & .card--header .cardHeader{
      bottom: 11rem;
      color: ${props => props.theme.colors.textDefault};
      text-shadow:  0 0 .7rem rgb(0 0 0 / 0%);
    }
    & .card--content{
      height: 100%;
      padding-top: 4rem;
      &--text{
        display: block;
        overflow: unset;
        text-overflow: unset;
      }
    }
  }
`;