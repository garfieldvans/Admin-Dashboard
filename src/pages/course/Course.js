import {
  Box,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GoEye } from 'react-icons/go';
import { useSearchParams } from 'react-router-dom';
import useCourses from '../../services/useCourses';
import Pagination from '../../components/Pagination';
import CourseDetailModal from './component/CourseDetailModal';

const Course = () => {
  const [searchParams] = useSearchParams();
  const { courses } = useCourses();
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  useEffect(() => {
    document.title = 'Course';
  }, []);

  const getListData = async (page, q) => {
    try {
      const res = await courses(page, q);
      setData(res?.data);
      setLinks(res?.links);
    } catch (e) {}
  };

  const showDetails = item => {
    setSelectedData(item);
    setModal(true);
  };

  const closeDetails = () => {
    setSelectedData(null);
    setModal(false);
  };

  return (
    <Box>
      <TableContainer>
        <Flex justifyContent="space-between">
          <Text
            color="#101828"
            fontSize="24px"
            fontFamily="Plus Jakarta Sans"
            fontWeight="600px"
            lineHeight="32px"
          >
            Course Details
          </Text>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.500">Name</Th>
              <Th color="gray.500">Language</Th>
              <Th color="gray.500">Course Duration</Th>
              <Th color="gray.500">Location</Th>
              <Th color="gray.500">Bootcamp Mentor</Th>
              <Th color="gray.500">Mentor Email</Th>
              <Th color="gray.500"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => {
              return (
                <Tr bgColor="gray.50" key={`payment-item-${item.id}`}>
                  <Td fontSize="14px" color="gray.900">
                    {item.title}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {/* {item.code} */}
                    JavaScript
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.credits}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.location}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.instructor}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    email@example.com
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {<GoEye onClick={() => showDetails(item)} />}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination links={links} onClick={getListData} />
      <CourseDetailModal
        isOpen={modal}
        onClose={closeDetails}
        refresh={getListData}
        data={selectedData}
      />
    </Box>
  );
};

export default Course;
