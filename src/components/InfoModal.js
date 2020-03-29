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
import Info from './Info';

const InfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <Flex justify="center">
    <Box width="100%">
      <Button size="sm" my={3} onClick={onOpen}>
        Show Info
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Info />
          </ModalBody>
          <ModalFooter>
            <Button variantColor="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    // </Flex>
  );
};

export default InfoModal;
