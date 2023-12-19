import { Button as CButton, Text } from '@chakra-ui/react';

const Button = ({
  text,
  bgColor="tomato",
  onClick,
  isBggradient,
  variant = 'sold',
  textColor = 'white',
  isLoading,
  size,
  
}) => {
  return (
    <CButton
      _hover={{
        bg: bgColor,
      }}
      isLoading={isLoading}
      bgGradient={
        isBggradient ? 'Linear(to-r, #F94449 37.55%, #A62031 184.78%)' : ''
      }
      variant={variant}
      onClick={onClick}
      size={size}
      //   padding="50vh"
      // fontSize="5vh"
      backgroundColor={bgColor}
      color={textColor}
    >
      <Text>
      {text}
      </Text>
    </CButton>
  );
};

export default Button;
