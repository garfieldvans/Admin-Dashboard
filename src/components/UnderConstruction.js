import { Box, Card, Flex, Image } from '@chakra-ui/react';
import useCustomToast from '../utils/useCustomToast';
import { useEffect, useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';

const UnderContruction = () => {
  const { showToastError, showToastSuccess } = useCustomToast();
  // const onRender = () => {
  //   showToastError('Pesan Error');
  //   showToastSuccess('Pesan Succes');
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     onRender();
  //   }, 2000);
  // }, []);
  const [showPopup, setShowPopup] = useState(false);
  const [selecteddata, setSelectedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onSubmit = () => {};

  return (
    <Box
      padding="10vh"
      display="flex"
      justifyContent="center"
      flexDirection={'column'}
    >
      {/* <Image
        src={window.location.origin + '/Ikan.jpg'}
        alt="Not Found"
        boxSize="100%"
        maxWeight="100vh"
        maxHeight="100vh"
      /> */}
      <Card w="628px" minH="516px" margin="auto" padding="30px">
        <Box padding="20px" alignSelf="center">
          <Button width="100%" text="Facebook" />
        </Box>
        <Flex direction="column" gap="16px">
          <FormInput
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
          />
          <FormInput
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <FormInput
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
          />
        </Flex>
        <Box mt="40px" />
        <Button text="Submit" isLoading={isLoading} onClick={onSubmit} />
      </Card>
    </Box>
  );
};

export default UnderContruction;
