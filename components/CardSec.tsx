import CharsTable from '@/components/CharsTable';

interface CardSecProps {
  cards: any;
}

const CardSec = ({ cards }: CardSecProps) => {
  return (
    <div className="flex flex-wrap gap-6 max-w-7xl justify-center">
      {cards.map((card: any) => (
        <CharsTable key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardSec;
