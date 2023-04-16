import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import CardSec from '@/components/CardSec';
import CurrentPage from '@/components/CurrentPage';
import ButtonSec from '@/components/ButtonSec';
import Box from '@/components/Box';

const Home = () => {
  const title = 'Rick and Morty Characters';

  const [cards, setCards] = useState<any[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>('');

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
          <Box
            display="flex"
            flexDirection="col"
            width="full"
            tw="justify-center items-center gap-6"
          >
            <CardSec
              cards={cards}
              page={page}
              value={value}
              setCards={setCards}
              setPage={setPage}
              setMaxPage={setMaxPage}
              setValue={setValue}
            />
            <CurrentPage page={page} maxPage={maxPage} />
            <ButtonSec
              page={page}
              maxPage={maxPage}
              setPage={setPage}
              setValue={setValue}
            />
          </Box>
        }
      />
    </>
  );
};

export default Home;
