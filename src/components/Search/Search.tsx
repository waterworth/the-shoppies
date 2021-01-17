import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React, { ChangeEventHandler } from 'react';

interface SearchProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <Box
      p='8'
      borderColor='ink.lightest'
      borderWidth='1px'
      borderRadius='xl'
      w='100%'>
      <InputGroup>
        <Flex direction='column' align='flex-start' w='100%'>
          <Heading size='l' pb='4' color='ink.base'>
            Movie Title
          </Heading>
          <InputLeftElement pointerEvents='none' />
          <Input
            onChange={onChange}
            borderColor='indigo.base'
            placeholder='Search for a movie! For example: "The Flintstones in Viva Rock Vegas"'
          />
        </Flex>
      </InputGroup>
    </Box>
  );
};
