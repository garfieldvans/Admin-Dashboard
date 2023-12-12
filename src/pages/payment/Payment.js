import {
  Box,
  Flex,
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
import usePayments from '../../services/usePayments';
import Pagination from '../../components/Pagination';
import PaymentDetailModal from './component/PaymentDetailmodal';
import { priceFormater } from '../../utils';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const { PaymentList } = usePayments();

  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  useEffect(() => {
    document.title = 'Payment';
  }, []);

  const getListData = async (page, q) => {
    try {
      const res = await PaymentList(page, q);
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
            Payment Details
          </Text>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.500">Name</Th>
              <Th color="gray.500">Payment Schedule</Th>
              <Th color="gray.500">Bill Number</Th>
              <Th color="gray.500">Amount Paid</Th>
              <Th color="gray.500">Balance Amount</Th>
              <Th color="gray.500">Date of Admission</Th>
              <Th color="gray.500"></Th>
            </Tr>
          </Thead>
          {/* <Tbody> */}
          {data.map(item => {
            return (
              <Tr bgColor="gray.50" key={`payment-item-${item.id}`}>
                <Td fontSize="14px" color="gray.900">
                  {item.student.name}
                </Td>
                <Td fontSize="14px" color="gray.900">
                  {item.schedule}
                </Td>
                <Td fontSize="14px" color="gray.900">
                  {item.number}
                </Td>
                <Td fontSize="14px" color="gray.900">
                  IDR {priceFormater(item.amount)}
                </Td>
                <Td fontSize="14px" color="gray.900">
                  RP {priceFormater(item.balance)}
                </Td>
                <Td fontSize="14px" color="gray.900">
                  {item.student.admissionDate}
                </Td>
                <Td fontSize="14px" color="gray.900">
                  {<GoEye onClick={() => showDetails(item)} />}
                </Td>
              </Tr>
            );
          })}
          {/* </Tbody> */}
        </Table>
      </TableContainer>
      <Pagination links={links} onClick={getListData} />
      <PaymentDetailModal
        isOpen={modal}
        onClose={closeDetails}
        refresh={getListData}
        data={selectedData}
      />
    </Box>
  );
};

export default Payment;
