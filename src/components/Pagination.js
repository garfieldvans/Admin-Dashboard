import { Button, Center, Flex } from '@chakra-ui/react';

const Pagination = ({ links, onClick }) => {
  return (
    <Center>
      <Flex mt="10px" gap="10px">
        {links.map((item, index) => {
          const isActive = item?.active;
          const page = item?.url?.split('page=');
          return (
            <Button
              key={`pagination-item-${index}`}
              onClick={() => onClick(parseInt(page[1]))}
              color={isActive ? 'white' : 'gray.900'}
              bgGradient={
                isActive ? 'linear(to-r, #F94449 37.55%, #A62D31 184.78%)' : ''
              }
              isDisabled={item.url === null}
              variant={isActive ? 'solid' : 'ghost'}
            >
              <span dangerouslySetInnerHTML={{ __html: item.label }} />
            </Button>
          );
        })}
      </Flex>
    </Center>
  );
};

export default Pagination;
