import {
  Button,
  Flex,
  Heading,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import React, { MouseEvent, useState } from 'react';
import { MovieDetails } from '../../App';
import { useNominations } from '../../ctx';
import axios from 'axios';

interface MovieProps {
  movie: MovieDetails;
  handleNominate?: MovieDetails;
  variant: string;
}

interface MovieByIdProps {
  Title: string;
  Released: string;
  Genre: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
}

export const Movie: React.FC<MovieProps> = ({ movie, variant }) => {
  const [movieData] = useState(movie);
  const [movieById, setMovieById] = useState({} as MovieByIdProps);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleNominate, handleRemoveNomination } = useNominations();

  const handleOnClick = (e: MouseEvent<HTMLElement>) => {
    setMovieById({} as MovieByIdProps);
    onOpen();
    const fetchMovieById = async (imdbID: string) => {
      await axios
        .get(`https://www.omdbapi.com/?apikey=509bc2e&i=${imdbID}`)
        .then((res) => setMovieById(res.data));
    };
    fetchMovieById(movie.imdbID);
    console.log(movieById);
  };

  return (
    <Flex py='8' justify='space-between' align='center'>
      <Flex direction='column'>
        <Heading size='s'>Title</Heading>
        <Text>{movie.Title}</Text>
        <Heading size='s'>Year of Release</Heading>
        <Text>{movie.Year}</Text>
      </Flex>
      <Flex direction='column'>
        <Button
          onClick={handleOnClick}
          bg='yellow.lighter'
          color='yellow.text'
          mb='4'>
          Get More Details
        </Button>

        <Modal onClose={onClose} isOpen={isOpen} size='2xl' closeOnEsc={true}>
          <ModalOverlay opacity='20' />
          <ModalContent pb={5}>
            <ModalHeader bg='green.light' color='green.text' justify='center'>
              <Text>Movie Details</Text>
            </ModalHeader>
            <ModalCloseButton mt={2} />
            <ModalBody p={6}>
              <Flex>
                <Image src={movieById?.Poster} />
                <Flex direction='column' px={8} justify='space-between'>
                  <Flex direction='column'>
                    <Heading size='s'>Movie Title</Heading>
                    <Text>{movieById?.Title}</Text>
                  </Flex>
                  <Flex direction='column'>
                    <Heading size='s'>Release Date</Heading>
                    <Text>{movieById?.Released}</Text>
                  </Flex>
                  <Flex direction='column'>
                    <Heading size='s'>Genre</Heading>
                    <Text>{movieById?.Genre}</Text>
                  </Flex>
                  <Flex direction='column'>
                    <Heading size='s'>Plot</Heading>
                    <Text>{movieById?.Plot}</Text>
                  </Flex>
                  <Flex direction='column'>
                    <Heading size='s'>imdbRating</Heading>
                    <Text>{movieById?.imdbRating}/10</Text>
                  </Flex>
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter justify='center'>
              <Button
                onClick={(e) => handleNominate(movieData)}
                bg='green.lighter'
                color='green.text'>
                Nominate
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {variant === 'result' ? (
          <Button
            onClick={(e) => handleNominate(movieData)}
            bg='green.lighter'
            color='green.text'>
            Nominate
          </Button>
        ) : (
          <Button
            onClick={(e) => handleRemoveNomination(movieData.imdbID)}
            bg='green.lighter'
            color='green.text'>
            Remove Nomination
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
