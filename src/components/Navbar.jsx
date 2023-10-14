import { GiCrenelCrown } from 'react-icons/gi';
import { PiChatsDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import NavItem from './navigation/NavItem';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import LogoutBtn from './elements/button/LogoutBtn';

export default function Navbar({ signOut }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box
      shadow={'md'}
      as={motion.nav}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      w={'100%'}
    >
      <Container maxW={'container.xl'} py={{ lg: 4, base: 3 }}>
        <Flex justify={'space-between'} alignItems={'center'}>
          <Box p={'2'}>
            <Heading size={'md'}>Threads Skuyy</Heading>
          </Box>
          <IconButton
            icon={<HamburgerIcon fontSize={'2xl'} />}
            ref={btnRef}
            size={'lg'}
            colorScheme={'blackAlpha'}
            variant={'outline'}
            aria-label="Hamburger button"
            border={'none'}
            hideFrom={'md'}
            isRound
            onClick={onOpen}
          />

          <Drawer
            isOpen={isOpen}
            placement={'right'}
            onClose={onClose}
            finalFocusRef={btnRef}
            size={'full'}
          >
            <DrawerOverlay hideFrom={'md'} />
            <DrawerContent hideFrom={'md'}>
              <DrawerCloseButton />
              <DrawerHeader>Threads Skuyy</DrawerHeader>
              <DrawerBody>
                <Flex flexDir={'column'} gap={4} justify={'center'} minH={'72'}>
                  <NavItem
                    Link={Link}
                    GiCrenelCrown={GiCrenelCrown}
                    PiChatsDuotone={PiChatsDuotone}
                  />
                </Flex>
              </DrawerBody>

              <DrawerFooter>
                <LogoutBtn signOut={signOut} />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Flex
            hideBelow={'md'}
            justify={'space-between'}
            alignItems={'center'}
            gap={'2'}
          >
            <NavItem
              Link={Link}
              GiCrenelCrown={GiCrenelCrown}
              PiChatsDuotone={PiChatsDuotone}
            />
          </Flex>
          <Flex hideBelow={'md'} alignItems="center" gap={1}>
            <LogoutBtn signOut={signOut} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

Navbar.propTypes = {
  signOut: PropTypes.func,
};
