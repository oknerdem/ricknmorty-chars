import Search from '@/components/Search';
import CharsTable from '@/components/CharsTable';

interface CardSecProps {
  cards: any;
  setCards: any;
  page: number;
  setPage: any;
  setMaxPage: any;
}

const CardSec = ({
  cards,
  setCards,
  page,
  setPage,
  setMaxPage,
}: CardSecProps) => {
  return (
    <>
      <Search
        cards={cards}
        setCards={setCards}
        page={page}
        setPage={setPage}
        setMaxPage={setMaxPage}
      />
      <div className="flex flex-wrap gap-6 max-w-7xl justify-center">
        {cards?.map((card: any) => (
          <CharsTable key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default CardSec;
