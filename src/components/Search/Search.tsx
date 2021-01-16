import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => setValue(e.target.value);

  return (
    <Box
      p='8'
      borderColor='ink.lightest'
      borderWidth='1px'
      borderRadius='xl'
      w='100%'>
      <InputGroup>
        <Flex direction='column' align='flex-start' w='100%'>
          <Text pb='4' color='ink.base'>
            Movie Title
          </Text>
          <InputLeftElement pointerEvents='none' />
          <Input
            borderColor='indigo.base'
            value={value}
            onChange={handleChange}
            placeholder='Type Movie Name Here'
          />
        </Flex>
      </InputGroup>
    </Box>
  );
};
