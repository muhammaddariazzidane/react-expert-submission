import { Box, Text, Badge, Flex, Button, Avatar } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { postedAt } from '../../../utils';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddComment } from '../../../states/threadDetail/action';
import CreateCommentForm from '../form/CreateCommentForm';
import PropTypes from 'prop-types';

export default function DiscussionCard(props) {
  const { BiComment, BiDislike, BiLike, BiShare, threads } = props;
  const [openCommentId, setOpenCommentId] = useState(null);
  const commentTextareaRef = useRef(null);
  const dispatch = useDispatch();

  const toggleModalComment = (id) => {
    setOpenCommentId(id === openCommentId ? null : id);
  };

  const handleCommentSubmit = (threadId, content) => {
    dispatch(asyncAddComment({ threadId, content }));
  };

  useEffect(() => {
    if (openCommentId !== null) {
      commentTextareaRef.current.focus();
    }
  }, [openCommentId]);

  return (
    <Flex mt={4} flexDir={'column'} gap={4}>
      {threads?.map((thread) => (
        <Box key={thread.id}>
          <Box w="full" shadow="md" rounded="xl">
            <Box p={4}>
              <Flex gap={2} alignItems={'center'}>
                <Avatar
                  hideBelow={'sm'}
                  size={'sm'}
                  src={thread.user.avatar}
                  name={thread.user.name}
                />
                <Text fontSize="sm" as={'p'}>{`#${thread.user.name}`}</Text>
                <Text fontSize="xs" as={'small'}>
                  {postedAt(thread.createdAt)}
                </Text>
              </Flex>
              <Box pl={{ lg: 10, base: 1, sm: 10, md: 10 }} mb={1}>
                <Link to={`/thread/${thread.id}`} mb={1}>
                  <Text as={'h1'} fontWeight={'semibold'}>
                    {thread.title}
                  </Text>
                </Link>
                <Text as={'p'}>{thread.body.substr(0, 120)}...</Text>
              </Box>
              <Flex
                justify={'space-between'}
                ml={{ lg: 8, base: 0 }}
                alignItems={'end'}
                gap={1}
                flexWrap={'wrap'}
              >
                <Badge
                  p={1}
                  rounded={'md'}
                  variant="subtle"
                  colorScheme="green"
                >
                  {`#${thread.category ? thread.category : ''}`}
                </Badge>

                <Flex gap={2} alignItems={'end'}>
                  <Button
                    display="flex"
                    variant={'unstyled'}
                    gap={1}
                    size={'sm'}
                    alignItems="center"
                  >
                    <BiLike size={23} />
                    <span>0</span>
                  </Button>
                  <Button
                    display="flex"
                    variant={'unstyled'}
                    gap={1}
                    size={'sm'}
                    alignItems="center"
                  >
                    <BiDislike size={23} />
                    <span>0</span>
                  </Button>
                  <Button
                    display="flex"
                    variant={'unstyled'}
                    gap={1}
                    size={'sm'}
                    alignItems="center"
                    onClick={() => toggleModalComment(thread.id)}
                  >
                    <BiComment size={23} />
                    <span>{thread.totalComments}</span>
                  </Button>
                  <Button
                    display="flex"
                    variant={'unstyled'}
                    gap={1}
                    size={'sm'}
                    alignItems="center"
                  >
                    <BiShare className="-scale-x-100" size={23} />
                    <span>0</span>
                  </Button>
                </Flex>
              </Flex>
            </Box>
            {openCommentId === thread.id && (
              <Box w={'full'} p={2} mt={2}>
                <CreateCommentForm
                  handleSubmit={(e) => {
                    e.preventDefault();
                    const content = commentTextareaRef.current.value;
                    if (content.trim() !== '') {
                      handleCommentSubmit(thread.id, content);
                      commentTextareaRef.current.value = '';
                    }
                  }}
                  commentTextareaRef={commentTextareaRef}
                />
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

DiscussionCard.propTypes = {
  threads: PropTypes.array,
  BiComment: PropTypes.func,
  BiLike: PropTypes.func,
  BiDislike: PropTypes.func,
  BiShare: PropTypes.func,
};
