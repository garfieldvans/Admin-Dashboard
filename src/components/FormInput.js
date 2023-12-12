import { Box, Input, Text } from '@chakra-ui/react';

const FormInput = ({
  label,
  placeholder,
  size = 'md',
  type,
  onChange,
  value,
  name,
  readOnly,
  accept,
}) => {
  return (
    <Box>
      <Text mb="6px">{label}</Text>
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
      />
    </Box>
  );
};

export default FormInput;
