import classNames from 'classnames';

interface ButtonProps {
  page: number;
  onClick?: () => void;
  maxPage?: number;
  children: React.ReactNode;
}

const buttonNormal =
  'font-semibold border-2 border-zinc-800 rounded-md px-2 py-1 hover:bg-black hover:text-white duration-200 dark:hover:bg-white dark:hover:text-black';

const NextButton = ({ page, maxPage, children, onClick }: ButtonProps) => {
  const NextButtonClasses = classNames(buttonNormal, {
    'opacity-50 cursor-not-allowed bg-black text-white dark:bg-white dark:text-black':
      page == maxPage,
  });

  return (
    <button
      className={NextButtonClasses}
      onClick={onClick}
      disabled={page == maxPage}
    >
      {children}
    </button>
  );
};

const PrevButton = ({ page, onClick, children }: ButtonProps) => {
  const PrevButtonClasses = classNames(buttonNormal, {
    'opacity-50 cursor-not-allowed bg-black text-white dark:bg-white dark:text-black':
      page == 1,
  });

  return (
    <button
      className={PrevButtonClasses}
      onClick={onClick}
      disabled={page == 1}
    >
      {children}
    </button>
  );
};

export { NextButton, PrevButton };
