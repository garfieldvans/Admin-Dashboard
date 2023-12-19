import { Box, Card, Flex, Image, Text } from '@chakra-ui/react';
import { useDashboard } from '../../services';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { priceFormater } from '../../utils';
import {FiUsers, FiUser} from 'react-icons/fi';
import {BiDollar, BiBook} from 'react-icons/bi'
 
const Dashboard = () => {
  const { statistic } = useDashboard();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  useEffect(() => {
    document.title = 'Home';
  }, []);

  const getListData = async () => {
    try {
      const res = await statistic();
      setData(res);
      console.log(res);
    } catch (e) {}
  };
  return (
    <Box
      display={{base:"flex",md:"flex"}}
      flexDirection={{base:"column",md:"row"}}
      padding="32px"
      bgColor="white"
      gap="24px"
      w="100%"
      h="auto"
    >
      {/* STUDENT ==================================================================== */}
      <Box
        bgColor="#EFF8FF"
        w="100%"
        height="auto"
        padding="16px"
        borderRadius="8px"
        gap="8px"
      >
        <Box>
        <FiUsers color='#2E90FA' size='40px' />
          <Text
            fontFamily="Plus Jakarta Sans"
            fontSize="14px"
            fontWeight="bold"
            lineHeight="20px"
            color="blue.800"
          >
            Students
            <Text
              fontSize="30px"
              color="#101828"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans"
              lineHeight="38px"
              textAlign="right"
            >
              {data.students}
            </Text>
          </Text>
        </Box>
      </Box>
      {/* COURSE ======================================================================= */}
      <Box
        bgColor="#FDF2FA"
        w="100%"
        height="auto"
        padding="16px"
        borderRadius="8px"
        gap="8px"
      >
        <Box>
        <BiBook color='#EE46BC' size='40px' />
          <Text fontSize="14px" fontWeight="bold" color="pink.700">
            Course
            <Text
              fontSize="30px"
              color="#101828"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans"
              lineHeight="38px"
              textAlign="right"
            >
              {data.courses}
            </Text>
          </Text>
        </Box>
      </Box>
      {/* PAYMENT ======================================================================== */}
      <Box
        bgColor="#FFFAEB"
        w="100%"
        height="auto"
        padding="16px"
        borderRadius="8px"
        gap="8px"
      >
        <Box>
          <BiDollar color='#F79009' size='40px' />
          <Text fontSize="14px" fontWeight="bold" color="yellow.700">
            Payments
            <Box flexDirection="row" display="flex" justifyContent="flex-end">
              <Text
                fontSize="14px"
                color="#101828"
                fontWeight="400"
                fontFamily="Plus Jakarta Sans"
                lineHeight="20px"
                textAlign="right"
                marginTop="15px"
              >
                IDR
              </Text>
              <Text
                fontSize="30px"
                color="#101828"
                fontWeight="600"
                fontFamily="Plus Jakarta Sans"
                lineHeight="38px"
                textAlign="right"
              >
                {priceFormater(data.payments)}
              </Text>
            </Box>
          </Text>
        </Box>
      </Box>
      {/* USERS =========================================================================== */}
      <Box
        bgGradient="Linear(to-r, #F94449 37.55%, #A62031 184.78%)"
        w="100%"
        height="auto"
        padding="16px"
        borderRadius="8px"
        gap="8px"
      >
        <Box>
        <FiUser color='white' size='40px' />
          <Text fontSize="14px" fontWeight="bold" color="white">
            Users
            <Text
              fontSize="30px"
              color="#FFF"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans"
              lineHeight="38px"
              textAlign="right"
            >
              {data.users}
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
