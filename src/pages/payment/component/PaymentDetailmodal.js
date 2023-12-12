import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Modal from '../../../components/Modal';

const initialState = {
  id: '',
  amount: '',
  balance: '',
  number: '',
  paymentDate: '',
  schedule: '',
  student: {
    admissionDate: '',
    email: '',
    enrollNumber: '',
    id: '',
    name: '',
    phoneNumber: '',
  },
};

const PaymentDetailModal = ({ data, onClose, isOpen }) => {
  const [details, setDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setDetails({ ...data });
    } else {
      setDetails(initialState);
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isButtonLoading={isLoading}
      withCloseIcon
      title="Course Details"
    >
      <Flex gap="8px" direction="column">
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Name</Text>
          <Text>{details.student.name}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Schedule</Text>
          <Text>{details.schedule}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Bill Number</Text>
          <Text>{details.number}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Amount Paid</Text>
          <Text>{details.amount}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Balance Amount</Text>
          <Text>{details.balance}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">paymentDate</Text>
          <Text>{details.paymentDate}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Email</Text>
          <Text>{details.student.email}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">enrollNumber</Text>
          <Text>{details.student.enrollNumber}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">phoneNumber</Text>
          <Text>{details.student.phoneNumber}</Text>
        </Box>
      </Flex>
    </Modal>
  );
};

export default PaymentDetailModal;
