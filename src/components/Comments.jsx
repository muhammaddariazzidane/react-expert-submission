import { Box, Text, Flex, Avatar, Heading } from '@chakra-ui/react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';

export default function Comments({ comments, authUser }) {
  return (
    <Flex flexDir={'column'}>
      <Box my={5}>
        <Heading
          as={'h1'}
          fontSize={'2xl'}
          fontWeight={'normal'}
          textAlign={'center'}
        >
          {comments.length > 0 ? 'Comments' : 'Comments not found'}
        </Heading>
      </Box>
      {comments.map((comment) => (
        <Box
          key={comment.id}
          maxW="full"
          alignSelf={
            comment.owner.id === authUser.id ? 'flex-end' : 'flex-start'
          }
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={
            comment.owner.id === authUser.id ? 'row' : 'row-reverse'
          }
          gap={1}
        >
          {comment.owner.id === authUser.id ? (
            <>
              <Box
                mb={2}
                display={'flex'}
                alignItems={'end'}
                flexDir={'column'}
              >
                <Text fontSize={'sm'}>{comment.owner.name}</Text>

                <Flex
                  p={2}
                  bg={'purple.500'}
                  color={'white'}
                  maxW="full"
                  alignSelf={`${
                    comment.owner.id === authUser.id ? 'flex-end' : 'flex-start'
                  }`}
                  rounded="md"
                >
                  <Text>{comment.content}</Text>
                </Flex>
                <Text fontSize={'xs'} as={'small'}>
                  {postedAt(comment.createdAt)}
                </Text>
              </Box>
              <Avatar
                mt={'-1'}
                src={comment.owner.avatar}
                name={comment.owner.name}
                size={'xs'}
              />
            </>
          ) : (
            <>
              <Box
                mb={2}
                display={'flex'}
                alignItems={'start'}
                flexDir={'column'}
              >
                <Text fontSize={'sm'}>{comment.owner.name}</Text>

                <Flex
                  p={2}
                  bg={'purple.500'}
                  color={'white'}
                  maxW="full"
                  alignSelf={`${
                    comment.owner.id === authUser.id ? 'flex-end' : 'flex-start'
                  }`}
                  rounded="md"
                >
                  <Text>{comment.content}</Text>
                </Flex>
                <Text fontSize={'xs'} as={'small'}>
                  {postedAt(comment.createdAt)}
                </Text>
              </Box>
              <Avatar
                mt={'-1'}
                src={comment.owner.avatar}
                name={comment.owner.name}
                size={'xs'}
              />
            </>
          )}
        </Box>
      ))}
    </Flex>
  );
}

Comments.propTypes = {
  comments: PropTypes.array,
  authUser: PropTypes.object,
};
