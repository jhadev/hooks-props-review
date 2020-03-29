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
        {openButtonText || 'Open'}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          {/* anything specified inside this component when we use it will show up inside ModalBody

            <ModalComp header='I love React!' openButtonText='Open'>
              <h2>REACT IS AWESOME!</h2>
            </ModalComp>

          */}
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
