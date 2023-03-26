import Image from 'next/image';
import classNames from 'classnames';

interface CharsTableProps {
  image: string;
  name: string;
  gender: string;
  status: string;
}

const CharsTable = ({ image, name, gender, status }: CharsTableProps) => {
  const statusClassName = classNames({
    'text-green-500': status === 'Alive',
    'text-red-500': status === 'Dead',
    'text-gray-500': status !== 'Alive' && status !== 'Dead',
  });

  status = status === 'unknown' ? 'Unknown' : status;

  return (
    <section className="flex flex-col gap-2">
      <Image
        className="rounded-xl w-72"
        width={0}
        height={0}
        src={image}
        alt={name}
        title={gender}
        unoptimized
        priority
      />
      <div className="text-center font-semibold">
        {name} <div className={statusClassName}>{status}</div>
      </div>
    </section>
  );
};

export default CharsTable;
