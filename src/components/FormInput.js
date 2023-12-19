import { Box, Input, Text } from '@chakra-ui/react';

const FormInput = ({
  label,
  placeholder,
  size,
  type,
  onChange,
  value,
  name,
  readOnly,
  accept,
  font,
  
}) => {
  return (
    <Box>
      <Text mb="6px" fontSize={{base:'sm', md: 'md'}}>{label}</Text>
      <Input
        placeholder={placeholder}
        isDisabled={readOnly}
        readOnly={readOnly}
        name={name}
        onChange={onChange}
        value={value}
        size={size}
        type={type}
        accept={accept}
        fontSize={font}
      />
    </Box>
  );
};

export default FormInput;
