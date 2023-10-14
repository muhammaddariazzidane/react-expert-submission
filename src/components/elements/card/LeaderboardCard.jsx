import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function LeaderboardCard({ index, leaderboard }) {
  return (
    <Flex
      justify={'space-between'}
      p={2}
      alignItems={'center'}
      rounded={'md'}
      _hover={{
        bg: 'purple.500',
        color: 'white',
        transition: '.2s ease-in-out',
      }}
    >
      <Flex alignItems={'center'} gap={2}>
        <Text as={'p'} fontSize={'md'} m={'auto'} fontWeight={'semibold'}>
          {index + 1}.
        </Text>
        <Avatar
          name={leaderboard.user.name}
          size={'sm'}
          src={leaderboard.user.avatar}
        />
        <Text
          as={'p'}
          fontStyle={'normal'}
          fontSize={'md'}
          fontWeight={'semibold'}
        >
          {leaderboard.user.name}
        </Text>
      </Flex>
      <Box>
        <Text
          as={'p'}
          fontStyle={'normal'}
          fontSize={'md'}
          fontWeight={'semibold'}
        >
          {leaderboard.score}
        </Text>
      </Box>
    </Flex>
  );
}

LeaderboardCard.propTypes = {
  index: PropTypes.number,
  leaderboard: PropTypes.object,
};
