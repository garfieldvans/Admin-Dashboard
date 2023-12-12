import { Button as CButton } from '@chakra-ui/react';

const Button = ({
  text,
  bgColor = 'blue',
  onClick,
  isBggradient,
  variant = 'sold',
  textColor = 'white',
  isLoading,
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
      size="lg"
      //   padding="50vh"
      // fontSize="5vh"
      backgroundColor={bgColor}
      color={textColor}
    >
      {text}
    </CButton>
  );
};

export default Button;
