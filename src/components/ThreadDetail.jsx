import { Box, Text, Flex, Avatar } from '@chakra-ui/react';
import { BiComment } from 'react-icons/bi';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';

export default function ThreadDetail({ thread }) {
  return (
    <Box shadow={'md'} rounded={'md'} p={6}>
      <Text textAlign={'center'} fontWeight={'semibold'} fontSize={'2xl'}>
        {thread.title}
      </Text>
      <Text pt={7}>{thread.body}</Text>
      <Flex pt={5} justify={'end'} gap={3}>
        <Flex alignItems={'center'} gap={2}>
          <Flex alignItems={'end'} gap={1}>
            <BiComment size={20} />
            {thread.comments.length}
          </Flex>
          <Box>
            <Text>{thread.owner.name}</Text>
          </Box>
          <Avatar
            size={'xs'}
            src={thread.owner.avatar}
            name={thread.owner.name}
          />
          <Box>
            <Text fontSize={'sm'}>{postedAt(thread.createdAt)}</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

ThreadDetail.propTypes = {
  thread: PropTypes.object,
};
