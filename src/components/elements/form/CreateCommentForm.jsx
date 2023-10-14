import { AiOutlineSend } from 'react-icons/ai';
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CreateCommentForm(props) {
  const { handleSubmit, commentTextareaRef } = props;
  return (
    <FormControl as={'form'} onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          rounded={'full'}
          ref={commentTextareaRef}
          placeholder={'Write a comment'}
        />
        <InputRightElement
          bg={'purple.500'}
          color={'white'}
          roundedRight={'full'}
          as={'button'}
          type={'submit'}
          pl={'1'}
        >
          <AiOutlineSend size={24} />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

CreateCommentForm.propTypes = {
  handleSubmit: PropTypes.func,
  commentTextareaRef: PropTypes.object,
};
