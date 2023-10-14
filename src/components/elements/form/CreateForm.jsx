import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CreateForm({ MdOutlineEmojiEmotions, addThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  const createThread = (e) => {
    e.preventDefault();
    addThread(title, body, category);

    setTitle('');
    setBody('');
    setCategory('');
  };
  return (
    <Box w={'full'} display={'flex'} flexDir={'column'} gap={2}>
      <FormControl isRequired>
        <Input
          type={'text'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={'Title discussion'}
        />
      </FormControl>
      <FormControl isRequired>
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={'What is happening?'}
        ></Textarea>
      </FormControl>
      <Flex alignItems={'center'} gap={2}>
        <Select
          size={'sm'}
          onChange={(e) => setCategory(e.target.value)}
          w={'fit-content'}
        >
          <option value={0} disabled defaultValue>
            Pilih Kategori
          </option>
          <option value={'Programming'}>Programming</option>
          <option value={'Non Progamming'}>Non Progamming</option>
          <option value={'React js'}>React js</option>
          <option value={'Ask'}>Ask</option>
          <option value={'Others'}>Others</option>
        </Select>
        <Text fontSize={'xs'} opacity={0.8}>
          (optional)
        </Text>
      </Flex>
      <Flex mt={2} justify={'space-between'} alignItems={'center'}>
        <IconButton
          icon={<MdOutlineEmojiEmotions size={27} />}
          variant={'unstyled'}
          aria-label={'Emoji Emotions'}
        />
        <Button
          type={'submit'}
          onClick={createThread}
          colorScheme={'purple'}
          size={'sm'}
          rounded={'full'}
          px={5}
          h={9}
          textTransform={'capitalize'}
        >
          post
        </Button>
      </Flex>
    </Box>
  );
}

CreateForm.propTypes = {
  MdOutlineEmojiEmotions: PropTypes.func,
  addThread: PropTypes.func,
};
