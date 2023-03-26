import { useState, useEffect } from 'react';

type Props = {
  cards: any[];
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
  function handleChange(e: any) {
    setValue(e.target.value);
    if (e.target.value === '' || page !== 1) {
      setPage(1);
    }
  }

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
    <section className="flex md:flex-row flex-col max-w-xs w-full gap-4">
      <input
        className="px-3 py-2 rounded-md flex-1"
        type="text"
        placeholder="Search for a character..."
        value={value}
        onChange={handleChange}
      />
    </section>
  );
};

export default Search;
