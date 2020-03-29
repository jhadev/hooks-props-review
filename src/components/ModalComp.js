import React from 'react';
import {
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/core';

const ModalComp = ({ header, openButtonText, closeButtonText, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box width="100%">
      <Button size="sm" my={3} onClick={onOpen}>
        {openButtonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button variantColor="red" onClick={onClose}>
              {closeButtonText || 'Close'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalComp;
