import Search from '@/components/Search';
import CharsTable from '@/components/CharsTable';

interface CardSecProps {
  value: string;
  cards: any;
  page: number;
  setValue: any;
  setCards: any;
  setPage: any;
  setMaxPage: any;
}

const CardSec = ({
  value,
  cards,
  page,
  setValue,
  setCards,
  setMaxPage,
  setPage,
}: CardSecProps) => {
  return (
    <>
      <Search
        page={page}
        value={value}
        setPage={setPage}
        setValue={setValue}
        setCards={setCards}
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
