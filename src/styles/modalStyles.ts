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
  variant,
} from 'styled-system'

type ModalBoxProps = SpaceProps & LayoutProps & BorderProps

export const OverlayLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0; 
  width: 100vw;
  height: 100vh;
  z-index: ${props => props.theme.zIndices.overlay};
  background-color: ${props => props.theme.colors.overlay};
`;

export const ModalBox = styled.div<ModalBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${props => props.theme.zIndices.modal};
  background-color: ${props => props.theme.colors.bgDefault};
  box-shadow: 0 0 2rem rgba(0,0,0,.6);
  ${compose(
    space,
    layout,
    border
  )}
`;