import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import LeaderboardCard from '../components/elements/card/LeaderboardCard';
import Layout from '../layouts/Layout';

export default function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <Layout>
      <Container maxW={'container.sm'}>
        <Box mb={10} minH={'full'}>
          <Heading
            as={'h1'}
            fontSize={'3xl'}
            fontWeight={'semibold'}
            textAlign={'center'}
            my={8}
          >
            Top Leaderboards
          </Heading>
          <Flex
            w={'full'}
            flexDir={'column'}
            gap={4}
            rounded={'md'}
            shadow={'md'}
            p={4}
          >
            {leaderboards?.map((leaderboard, index) => (
              <LeaderboardCard
                key={leaderboard.user.id}
                index={index}
                leaderboard={leaderboard}
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
}
