import { NextButton, PrevButton } from '@/components/Buttons';

interface ButtonSecProps {
  page: number;
  setPage: (page: number) => void;
  maxPage: number;
}

const ButtonSec = ({ page, setPage, maxPage }: ButtonSecProps) => {
  const handlePrevPage = () => {
    setPage(page - 1);
    moveUp();
  };

  const handleNextPage = () => {
    setPage(page + 1);
    moveUp();
  };

  const handleReset = () => {
    setPage(1);
    moveUp();
  };

  return (
    <section className="flex flex-col gap-2 select-none">
      <section className="flex gap-4">
        <PrevButton page={page} onClick={handlePrevPage}>
          Back
        </PrevButton>
        <NextButton maxPage={maxPage} page={page} onClick={handleNextPage}>
          Next
        </NextButton>
      </section>
      <button onClick={handleReset} className="hover:underline">
        Reset
      </button>
    </section>
  );
};

export default ButtonSec;

function moveUp() {
  window.scrollTo({ top: 0, left: 0 });
}
