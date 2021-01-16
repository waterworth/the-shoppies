import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Slide,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { MovieDetails } from '../../App';

interface MovieProps {
  movie: MovieDetails;
}

export const Movie: React.FC<MovieProps> = (props) => {
  return (
    <Flex py='8' justify='space-between' align='center'>
      <Flex direction='column'>
        <Heading size='s'>Title</Heading>
        <Text>{props.movie.Title}</Text>
        <Heading size='s'>Year of Release</Heading>
        <Text>{props.movie.Year}</Text>
      </Flex>
      <Flex direction='column'>
        <Button bg='yellow.lighter' color='yellow.text' mb='4'>
          Get More Details
        </Button>
        <Button bg='green.lighter' color='green.text'>
          Nominate
        </Button>
      </Flex>
    </Flex>
  );
};
