import React, { useEffect, useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';

type Props = {
  setCards: any;
  page: number;
  setPage: any;
  setMaxPage: any;
  value: string;
  setValue: any;
};

const Search = ({
  setCards,
  page,
  setPage,
  setMaxPage,
  value,
  setValue,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: any) {
    setValue(e.target.value);
    if (e.target.value === '' || page !== 1) {
      setPage(1);
    }
  }

  function keyListener(e: any) {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setValue('');
      setPage(1);
    }
  }

  useEffect(() => {
    addEventListener('keydown', keyListener);
    return () => {
      removeEventListener('keydown', keyListener);
    };
  });

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&page=${page}`
    )
      .then(res => res.json())
      .then(data => {
        setCards(data.results);
        setMaxPage(data.info?.pages);
      });
  });

  return (
    <div className="relative w-full mx-auto flex justify-center select-none">
      <input
        className="sInput"
        type="text"
        placeholder="Search..."
        value={value}
        ref={inputRef}
        onChange={handleChange}
      />
      <button className="-ml-6 cursor-pointer hover:opacity-70 active:opacity-80 duration-200">
        <RxCross2
          className="dark:text-neutral-200 text-neutral-700 text-lg"
          onClick={() => {
            setValue('');
            setPage(1);
          }}
        />
      </button>
    </div>
  );
};

export default Search;
