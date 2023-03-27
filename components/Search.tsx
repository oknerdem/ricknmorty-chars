import { useEffect } from 'react';

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
    <input
      className="sInput"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={handleChange}
    />
  );
};

export default Search;
