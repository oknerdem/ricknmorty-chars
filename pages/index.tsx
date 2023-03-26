import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import CardSec from '@/components/CardSec';
import CurrentPage from '@/components/CurrentPage';
import ButtonSec from '@/components/ButtonSec';

const Home = () => {
  const title = 'Rick and Morty Characters';

  const [cards, setCards] = useState<any[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setMaxPage(data.info.pages);
        setCards(data.results);
      });
  }, [page]);

  return (
    <>
      <Layout
        title={title}
        page={
          <>
            <div className="flex flex-col justify-center items-center w-full gap-6">
              <CardSec cards={cards} setCards={setCards} />
              <CurrentPage page={page} />
              <ButtonSec page={page} setPage={setPage} maxPage={maxPage} />
            </div>
          </>
        }
      />
    </>
  );
};

export default Home;
