import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncAddThread } from '../states/threads/action';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { BiLike, BiDislike, BiShare, BiComment } from 'react-icons/bi';
import { Flex, Box, Avatar, Heading, Divider } from '@chakra-ui/react';
import CreateForm from '../components/elements/form/CreateForm';
import Layout from '../layouts/Layout';
import DiscussionCard from '../components/elements/card/DiscussionCard';
import PropTypes from 'prop-types';
import LeaderboardCard from '../components/elements/card/LeaderboardCard';

export default function HomePage({ authUser, signOut }) {
  const {
    threads = [],
    users = [],
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = (title, body, category = '') => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser,
  }));

  return (
    <Layout signOut={signOut}>
      <Flex w={'full'} mt="2" justify={'center'} gap={4}>
        <Box shadow="md" p={4} w={'81%'} minH={'100vh'} pb={12} maxW={'2xl'}>
          <Flex shadow="md" p={4} rounded="xl" justifyContent="center" gap={2}>
            <Box display={{ base: 'none', lg: 'block' }}>
              <Avatar size={'sm'} name={authUser.name} src={authUser.avatar} />
            </Box>
            <CreateForm
              addThread={onAddThread}
              MdOutlineEmojiEmotions={MdOutlineEmojiEmotions}
            />
          </Flex>
          <Heading
            mt={4}
            textAlign={'center'}
            fontSize={'xl'}
            fontWeight={'semibold'}
          >
            Diskusi Tersedia
          </Heading>
          <Divider my={3} />
          <DiscussionCard
            BiComment={BiComment}
            BiDislike={BiDislike}
            BiLike={BiLike}
            BiShare={BiShare}
            threads={threadList}
          />
        </Box>
        <Box
          w={'19%'}
          display={{ base: 'none', lg: 'block' }}
          h={'100%'}
          rounded={'lg'}
        >
          <Box shadow="md" rounded="md" pb={2}>
            <Heading
              mt={2}
              textAlign={'center'}
              fontSize={'md'}
              fontWeight={'semibold'}
            >
              Top 3
            </Heading>
            <Heading
              textAlign={'center'}
              fontSize={'md'}
              fontWeight={'semibold'}
            >
              Leaderboard
            </Heading>
            <Divider mt={3} />
            <Flex p={2} gap={1} flexDir="column">
              {leaderboards?.slice(0, 3).map((leaderboard, index) => (
                <LeaderboardCard
                  index={index}
                  key={leaderboard.user.id}
                  leaderboard={leaderboard}
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

HomePage.propTypes = {
  authUser: PropTypes.object,
  signOut: PropTypes.func,
};
