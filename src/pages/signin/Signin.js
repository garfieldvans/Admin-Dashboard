import {
  Box,
  Card,
  Center,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Constants from '../../constants';
import { useAuth } from '../../services';

const Signin = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await signIn(form);
      localStorage.setItem('accessToken', res.token);
      navigate('/admin/dashboard', { replace: true });
    } catch (e) {}
    setIsLoading(false);
  };
  return (
    <Box
      display="flex"
      minH={'100vh'}
      bgGradient="linear(to-r, #F94449 37.55%, #A62D31 184.78%)"
    >
      <Card w="628px" minH="516px" margin="auto" padding="40px">
        <Image
          src={window.location.origin + '/codemasters_logo.png'}
          alignSelf="center"
          width="290px"
          height="32px"
        />
        <Text alignSelf="center" mt="40px">
          SIGN IN
        </Text>
        <Text alignSelf="center" mt="8px" color="gray.500">
          Enter your credentials to acces your account
        </Text>
        <Box mt="40px" />
        <Flex direction="column" gap="16px">
          <FormInput
            name="email"
            value={form.email}
            onChange={handleChange}
            label="Email"
            placeholder="Enter your email"
          />
          <FormInput
            name="password"
            value={form.password}
            onChange={handleChange}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </Flex>
        <Box mt="40px" />
        <Button
          text="Submit"
          isLoading={isLoading}
          onClick={handleSubmit}
          isBggradient
        />
        <Center mt="40px">
          <Stack direction="row" spacing="3px">
            <Text>Forgot your password?</Text>
            <Text color="#F94449">Reset Password</Text>
          </Stack>
        </Center>
      </Card>
    </Box>
  );
};

export default Signin;
