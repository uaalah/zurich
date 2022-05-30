import React, { FC, useState } from 'react';
import { Box, ButtonDisplay, Text } from '../styles';
import AddCardForm from './forms/AddCardForm';
import Modal from './Modal';
import Portal from './Portal';

const Header: FC = () => {
  const [ viewModal, setViewModal ] = useState<boolean>(false);
  const HandlerClose = () => {
    setViewModal(false)
  }
  return(
    <>
    <Box as="header" bg="textDefault" py={5} color="bgDefault">
      <Box
        width={{_: "100%", laptop: "1024px"}} 
        m="auto" 
        px="5"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="h1" className="pageHeader">ZurichCARDS</Text>
        <ButtonDisplay
          borderRadius="rounded"
          width="3rem"
          height="3rem"
          onClick={() => setViewModal(true)}
        >
          <Text className="pageHeader" as="span">+</Text>
        </ButtonDisplay>
      </Box>
    </Box>
    {viewModal && (
      <Portal id="newCard">
        <Modal closeAction={HandlerClose} titulo="Nueva tarjeta">
          <AddCardForm closeAction={HandlerClose} />
        </Modal>
      </Portal>
    )}
    </>
  )
}

export default Header;