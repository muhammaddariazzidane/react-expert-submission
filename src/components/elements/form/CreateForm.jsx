/* eslint-disable react/prop-types */
import { useState } from 'react';
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
    <form method="POST" className="w-full">
      <div className="form-control">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input w-full input-bordered placeholder:p-1 placeholder:text-lg border-t-0 border-x-0 rounded-none focus:outline-none border-b"
          placeholder="Title discussion"
        />
      </div>
      <div className="form-control">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="textarea border-t-0 border-x-0 focus:ring-0 focus:outline-none textarea-bordered rounded-none h-20 text-lg placeholder:p-1 placeholder:text-lg"
          placeholder="What is happening?"
        ></textarea>
      </div>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="select mt-1 select-sm w-fit  pl-1 rounded-none"
      >
        <option value={0} disabled defaultValue>
          Pilih Kategori
        </option>
        <option value={'Programming'}>Programming</option>
        <option value={'Non Progamming'}>Non Progamming</option>
        <option value={'React js'}>React js</option>
        <option value={'Ask'}>Ask</option>
        <option value={'Others'}>Others</option>
      </select>
      <p className="text-xs inline ml-1 opacity-80">(optional)</p>
      <div className="flex mt-2 justify-between items-center">
        <button type="button">
          <MdOutlineEmojiEmotions size={27} />
        </button>
        <button
          type="submit"
          onClick={createThread}
          className="btn btn-primary  rounded-full px-5 h-9 btn-sm capitalize "
        >
          post
        </button>
      </div>
    </form>
  );
}
