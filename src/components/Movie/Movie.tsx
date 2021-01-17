import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MovieDetails } from '../../App';
import { useNominations } from '../../ctx';

interface MovieProps {
  movie: MovieDetails;
  handleNominate?: MovieDetails;
  variant: string;
}

export const Movie: React.FC<MovieProps> = ({ movie, variant }) => {
  const [movieData, setMovieData] = useState(movie);

  const { handleNominate, handleRemoveNomination } = useNominations();

  return (
    <Flex py='8' justify='space-between' align='center'>
      <Flex direction='column'>
        <Heading size='s'>Title</Heading>
        <Text>{movie.Title}</Text>
        <Heading size='s'>Year of Release</Heading>
        <Text>{movie.Year}</Text>
      </Flex>
      <Flex direction='column'>
        <Button bg='yellow.lighter' color='yellow.text' mb='4'>
          Get More Details
        </Button>
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
