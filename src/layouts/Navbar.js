import {
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { FiBell, FiMenu } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';

const Navbar = ({ onOpen, ...rest }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeText = event => {
    const { name, value } = event?.target;
    setSearchParams({ [name]: value });
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'white')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        mr={{base: "10px", md: 'none'}}
        icon={<FiMenu />}
      />
      <Box
        width="212px"
        mr="27px"
        borderWidth="1px"
        borderColor="#E5E5E5"
        borderRadius="lg"
      >
        <InputGroup>
          <Input
            placeholder="Search"
            textColor="#000"
            name="search"
            onChange={handleChangeText}
            _placeholder={{ opacity: 1, color: 'gray.500' }}
          />
          <InputRightElement>
            <BiSearch color="#C4C4C4" />
          </InputRightElement>
        </InputGroup>
      </Box>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          textColor="#C4C4C4"
          icon={<FiBell />}
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
