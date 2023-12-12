import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Modal from '../../../components/Modal';

const initialState = {
  code: '',
  credits: '',
  description: '',
  enrollmentLimit: '',
  fee: '',
  instructor: '',
  location: '',
  title: '',
};

const CourseDetailModal = ({ data, onClose, isOpen }) => {
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
          <Text fontWeight="bold">Code</Text>
          <Text>{details.title}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Duration</Text>
          <Text>{details.credits}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Student Limit</Text>
          <Text>{details.enrollmentLimit}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Fee</Text>
          <Text>{details.fee}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Mentor</Text>
          <Text>{details.instructor}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Location</Text>
          <Text>{details.location}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Code</Text>
          <Text>{details.code}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Description :</Text>
          <Text>{details.description}</Text>
        </Box>
      </Flex>
    </Modal>
  );
};

export default CourseDetailModal;
