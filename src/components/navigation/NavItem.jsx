import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function NavItem(props) {
  const { Link, PiChatsDuotone, GiCrenelCrown } = props;

  return (
    <>
      <Link to={'/'}>
        <Flex
          alignItems={'center'}
          bg={`${location.pathname == '/' ? 'gray.800' : null}`}
          color={`${location.pathname == '/' ? 'white' : 'black'}`}
          w={'fit-content'}
          p={2}
          justify={'center'}
          mx={'auto'}
          rounded={'md'}
          gap={2}
        >
          <PiChatsDuotone
            size={22}
            color={`${location.pathname == '/' ? 'lightgreen' : 'green'}`}
          />
          Threads
        </Flex>
      </Link>
      <Link to={'/leaderboard'}>
        <Flex
          alignItems={'center'}
          justify={'center'}
          gap={2}
          mx={'auto'}
          bg={`${location.pathname == '/leaderboard' ? 'gray.800' : null}`}
          color={`${location.pathname == '/leaderboard' ? 'white' : 'black'}`}
          w={'fit-content'}
          rounded={'md'}
          p={2}
        >
          <GiCrenelCrown size={22} color="red" />
          Leaderboard
        </Flex>
      </Link>
    </>
  );
}

NavItem.propTypes = {
  Link: PropTypes.object,
  PiChatsDuotone: PropTypes.func,
  GiCrenelCrown: PropTypes.func,
};
