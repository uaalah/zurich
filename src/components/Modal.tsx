import { FC, useRef } from "react";
import { useClickAway } from "react-use"
import { Box, ButtonDisplay, Text, ModalBox, OverlayLayer } from "../styles";

interface IModal {
  closeAction: () => void,
  titulo: string,
  children: React.ReactNode
}

const Modal: FC<IModal> = ({ closeAction, titulo, children }) => {
  const refModal = useRef(null);
  useClickAway(refModal, closeAction);
  return(
    <OverlayLayer>
      <ModalBox 
        ref={refModal}
        width= "100%"
        height={{_: "100%", tablet: "auto"}}
        maxWidth={{ tablet: '500px'}}
        maxHeight={{ tablet: '80%' }}
        px={{_: 5, tablet: 8}}
        py={{_: 8, tablet: 5}}
        borderRadius={{_: 0, tablet: 'l'}}
      >
        <ButtonDisplay
          borderRadius="rounded"
          width="2.5rem"
          height="2.5rem"
          position="absolute"
          right={{_: 5, tablet: "-1.25rem"}}
          top={{_: 5, tablet: "-1.25rem"}}
          onClick={closeAction}
        >
          <Text className="modalHeader" as="span">X</Text>
        </ButtonDisplay>
        <Text as="h2" className="modalHeader">
          <Box as="span" 
            borderBottom="1px solid" borderColor="textDefault" 
            display="block" py="3" mb="6"
          >
            {titulo}
          </Box>
        </Text>
        {children}
      </ModalBox>
    </OverlayLayer>
  )
}

export default Modal