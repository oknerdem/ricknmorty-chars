import { useState, useEffect } from 'react';

type Props = {
  cards: any[];
  setCards: any;
  page: number;
  setPage: any;
  setMaxPage: any;
};

const Search = ({ setCards, page, setPage, setMaxPage }: Props) => {
  const [value, setValue] = useState<string>('');

  function handleChange(e: any) {
    setValue(e.target.value);
    if (e.target.value === '' || page !== 1) {
      setPage(1);
    }
  }

  function handleReset() {
    setValue('');
    setPage(1);
  }

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&page=${page}`
    )
      .then(res => res.json())
      .then(data => {
        setCards(data.results);
        setMaxPage(data.info.pages);
      });
  });

  return (
    <section className="flex md:flex-row flex-col max-w-sm w-full gap-4">
      <input
        className="px-3 py-2 rounded-md flex-1"
        type="text"
        placeholder="Search for a character..."
        value={value}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-white text-black rounded-md px-2 py-2"
        onClick={handleReset}
      >
        Reset
      </button>
    </section>
  );
};

export default Search;
