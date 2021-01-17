import {
  Slide,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

interface MovieDetailsModalProps {
  movieID: string;
}

export const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({}) => {
  const { isOpen, onClose } = useDisclosure();
  const finalRef = useRef();
  return (
    <Slide in={isOpen}>
      (
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay opacity='40' />
        <ModalContent pb={5}>
          <ModalHeader>Movie Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Hello</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      )
    </Slide>
  );
};
