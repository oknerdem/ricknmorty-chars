import { useEffect, useRef } from 'react';

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

  function keyListener(e: any) {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setValue('');
      setPage(1);
    }
  }

  return (
    <input
      className="sInput"
      type="text"
      placeholder="Search..."
      value={value}
      ref={inputRef}
      onChange={handleChange}
    />
  );
};

export default Search;
