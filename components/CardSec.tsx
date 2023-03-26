import Search from '@/components/Search';
import CharsTable from '@/components/CharsTable';

interface CardSecProps {
  cards: any;
  setCards: any;
}

const CardSec = ({ cards, setCards }: CardSecProps) => {
  return (
    <>
      <Search cards={cards} setCards={setCards} />
      <div className="flex flex-wrap gap-6 max-w-7xl justify-center">
        {cards?.map((card: any) => (
          <CharsTable key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default CardSec;
