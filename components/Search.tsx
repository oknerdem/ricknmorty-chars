import { useState, useEffect } from 'react';

type Props = {
  cards: any[];
  setCards: any;
};

const Search = ({ setCards }: Props) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then(res => res.json())
      .then(data => {
        setCards(data.results);
      });
  }, [value, setCards]);

  return (
    <section className="flex md:flex-row flex-col max-w-sm w-full gap-4">
      <input
        className="px-3 py-2 rounded-md flex-1"
        type="text"
        placeholder="Search for a character..."
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-white text-black rounded-md px-2 py-2"
        onClick={() => {
          setValue('');
        }}
      >
        Reset
      </button>
    </section>
  );
};

export default Search;
