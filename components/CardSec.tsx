import Search from '@/components/Search';
import CharsTable from '@/components/CharsTable';

interface CardSecProps {
  cards: any;
  setCards: any;
  page: number;
  setPage: any;
  setMaxPage: any;
  value: string;
  setValue: any;
}

const CardSec = ({
  cards,
  setCards,
  page,
  setPage,
  setMaxPage,
  value,
  setValue,
}: CardSecProps) => {
  return (
    <>
      <Search
        cards={cards}
        setCards={setCards}
        page={page}
        setPage={setPage}
        setMaxPage={setMaxPage}
        value={value}
        setValue={setValue}
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
